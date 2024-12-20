<script lang="ts">
	import { onMount } from 'svelte'
	import { El } from '../el'
	import type { InputProps, InputWrapperProps } from './Input.types'

	type $$Props = InputProps

	let {
		componentName = 'input',
		disabled,
		borderRounded,
		borderFlush,
		mask,
		maskOptions,
		placeholder,
		readonly,
		required,
		size,
		state: validationState,
		type,
		value = $bindable(),
		name,
		id = $bindable(),
		min,
		max,
		minlength,
		maxlength,
		pattern,
		step,
		children,
		startSnippet,
		endSnippet,
		...restProps
	}: $$Props = $props()

	let element: HTMLInputElement | undefined = $state(undefined)

	onMount(async () => {
		const Inputmask = await import('inputmask')

		if (element !== undefined && mask) {
			var im = new Inputmask.default(mask, maskOptions)
			im.mask(element)
		}
		return () => {
			if (element !== undefined && mask) {
				Inputmask.default.remove(element)
			}
		}
	})

	let props: $$Props = $derived({
		...restProps,
		componentName,
		tag: 'input',
		placeholder,
		disabled,
		readonly,
		required,
		type,
		name,
		min,
		max,
		minlength,
		maxlength,
		pattern,
		step,
		cssProps: {
			size,
			state: validationState,
			borderRounded,
			borderFlush,
		},
	})

	let wrapperProps: InputWrapperProps = $derived({
		componentName: `${componentName}-wrapper`,
		cssProps: {
			size,
		},
	})
</script>

{#if startSnippet || endSnippet}
	<El {...wrapperProps}>
		{#if startSnippet}
			<El tag="span" componentName="{componentName}-icon">
				{@render startSnippet()}
			</El>
		{/if}
		<El tag="input" bind:value bind:element bind:id {...props} />
		{#if endSnippet}
			<El tag="span" componentName="{componentName}-icon">
				{@render endSnippet()}
			</El>
		{/if}
	</El>
{:else}
	<El {...restProps} tag="input" bind:value bind:element bind:id {...props} />
{/if}
