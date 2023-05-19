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

	const components = [get_current_component(), ...($$props.components ?? [])]

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
		}
	}
</script>

<El componentName="{componentName}-wrapper" cssProps={wrapperCssProps}>
	{#if $$slots.start}
		<slot name="start" />
	{/if}
	<slot />
	<El
		tag="input"
		bind:value
		bind:element
		bind:id
		{components}
		{...$$restProps}
		{...props}
		{cssProps} />
	{#if $$slots.end}
		<slot name="end" />
	{/if}
</El>
