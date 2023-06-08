<script lang="ts">
	import { onMount } from 'svelte'
	import { El } from '../el'
	import type { InputProps, InputWrapperProps } from './Input.types'
	import { get_current_component } from 'svelte/internal'

	type $$Props = InputProps

	export let componentName: $$Props['componentName'] = 'input'
	export let disabled: $$Props['disabled'] = undefined
	export let borderRounded: $$Props['borderRounded'] = undefined
	export let borderFlush: $$Props['borderFlush'] = undefined
	export let mask: $$Props['mask'] = undefined
	export let maskOptions: $$Props['maskOptions'] = undefined
	export let placeholder: $$Props['placeholder'] = undefined
	export let readonly: $$Props['readonly'] = undefined
	export let required: $$Props['required'] = undefined
	export let size: $$Props['size'] = undefined
	export let state: $$Props['state'] = undefined
	export let type: $$Props['type'] = undefined
	export let value: $$Props['value'] = undefined
	export let name: $$Props['name'] = undefined
	export let id: $$Props['id'] = undefined

	export let min: $$Props['min'] = undefined
	export let max: $$Props['max'] = undefined
	export let minlength: $$Props['minlength'] = undefined
	export let maxlength: $$Props['maxlength'] = undefined
	export let pattern: $$Props['pattern'] = undefined
	export let step: $$Props['step'] = undefined

	const components = [
		{ component: get_current_component(), except: [] },
		...($$props.components ?? []),
	]

	let element: HTMLInputElement
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

	let props: $$Props = { componentName, placeholder, disabled, readonly, type }
	let cssProps: $$Props = { state, borderRounded, borderFlush }
	let wrapperCssProps: InputWrapperProps = { size }

	$: {
		cssProps = {
			size,
			state,
			borderRounded,
			borderFlush,
		}

		props = {
			componentName,
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
		}
	}
</script>

{#if $$slots.start || $$slots.end}
	<El componentName="{componentName}-wrapper" {...$$restProps} cssProps={wrapperCssProps}>
		{#if $$slots.start}
			<El tag="span" componentName="{componentName}-icon">
				<slot name="start" />
			</El>
		{/if}
		<El tag="input" bind:value bind:element bind:id {components} {...props} {cssProps} />
		{#if $$slots.end}
			<El tag="span" componentName="{componentName}-icon">
				<slot name="end" />
			</El>
		{/if}
	</El>
{:else}
	<El tag="input" bind:value bind:element bind:id {components} {...props} {cssProps} />
{/if}
