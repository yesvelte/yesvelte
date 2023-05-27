<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { El, type ElProps } from '../el'
	import type { CheckboxProps } from './Checkbox.types'

	type $$Props = CheckboxProps

	export let componentName: $$Props['componentName'] = 'checkbox'
	export let color: $$Props['color'] = undefined
	export let checked: $$Props['checked'] = false
	export let description: $$Props['description'] = undefined
	export let disabled: $$Props['disabled'] = undefined
	export let indeterminate: $$Props['indeterminate'] = false
	export let inline: $$Props['inline'] = false
	export let label: $$Props['label'] = undefined
	export let name: $$Props['name'] = undefined
	export let reverse: $$Props['reverse'] = undefined
	export let value: $$Props['value'] = undefined
	export let id: $$Props['id'] = undefined

	const components = [
		{ component: get_current_component(), except: [] },
		...($$props.components ?? []),
	]

	let element: HTMLElement
	let checkboxProps: Partial<ElProps>
	let labelProps: Partial<ElProps>

	$: wrapperProps = {
		componentName: componentName + '-wrapper',
		cssProps: {
			inline,
			reverse,
		},
	}

	$: checkboxProps = {
		...$$restProps,
		componentName,
		disabled,
		checked,
		value,
		name,
		type: 'checkbox',
		tag: 'input',
		cssProps: {
			color,
			indeterminate,
		},
	}

	$: labelProps = {
		componentName: componentName + '-label',
		tag: 'label',
		for: id,
	}

	$: descriptionProps = {
		componentName: componentName + '-description',
	}

	const onChange = (event: any) => {
		checked = event.target.checked
	}
</script>

<El {...wrapperProps}>
	<El {...checkboxProps} bind:id bind:element on:change={onChange} {components} />
	{#if label || $$slots['default']}
		<El {...labelProps}>
			<slot>
				{label}
			</slot>
		</El>
	{/if}

	{#if description || $$slots['description']}
		<El {...descriptionProps}>
			<slot name="description">
				{description}
			</slot>
		</El>
	{/if}
</El>
