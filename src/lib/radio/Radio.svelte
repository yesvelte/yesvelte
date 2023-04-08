<script lang="ts">
	import { El } from '../el'
	import type { RadioProps } from './Radio.types'

	type $$Props = RadioProps

	export let color: $$Props['color'] = undefined
	export let description: $$Props['description'] = undefined
	export let componentName: $$Props['componentName'] = 'radio'
	export let disabled: $$Props['disabled'] = undefined
	export let inline: $$Props['inline'] = undefined
	export let reverse: $$Props['reverse'] = undefined
	export let label: $$Props['label'] = undefined
	export let name: $$Props['name'] = undefined
	export let readonly: $$Props['readonly'] = undefined
	export let checked: $$Props['checked'] = false
	export let value: $$Props['value'] = undefined

	let labelForId: $$Props['for'] = undefined
	export { labelForId as for }

	let inputElement: HTMLElement
	let cssProps: $$Props = {}
	let otherProps: $$Props = {}

	$: {
		labelForId = inputElement?.id ?? ''

		cssProps = { color }

		otherProps = {
			componentName,
			disabled,
			readonly,
			value,
			checked,
			name: name ?? inputElement?.id,
		}
	}
</script>

<El componentName="{componentName}-wrapper" cssProps={{ inline, reverse }}>
	<El
		on:click
		on:change
		on:input
		on:focus
		on:blur
		tag="input"
		{...{ type: 'radio' }}
		bind:element={inputElement}
		{...$$restProps}
		{...otherProps}
		{cssProps}
		on:change />
	{#if label || $$slots['default']}
		<El tag="label" componentName="{componentName}-label" {...{ for: labelForId }}>
			<slot>
				{#if label}
					{label}
				{/if}
			</slot>
		</El>
	{/if}

	{#if description || $$slots['description']}
		<El componentName="{componentName}-description">
			<slot name="description">
				{description}
			</slot>
		</El>
	{/if}
</El>
