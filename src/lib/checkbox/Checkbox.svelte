<script lang="ts">
	import { El, type ElProps } from '../el'
	import type { CheckboxProps } from './Checkbox.types'

	type $$Props = CheckboxProps

	let {
		componentName = 'checkbox',
		color,
		checked = $bindable(),
		description,
		disabled,
		indeterminate = false,
		inline = false,
		label,
		name,
		reverse,
		value,
		id = $bindable(),
		children,
		descriptionSnippet,
		...restProps
	}: $$Props = $props()

	let element: HTMLElement | undefined = $state(undefined)

	function onchange(event: any) {
		restProps.onchange?.(event)
		checked = event.target.checked
	}

	let wrapperProps: $$Props = $derived({
		componentName: componentName + '-wrapper',
		cssProps: {
			inline,
			reverse,
		},
	})

	let checkboxProps: $$Props = $derived({
		...restProps,
		componentName,
		disabled,
		checked,
		value,
		name,
		type: 'checkbox',
		tag: 'input',
		onchange,
		cssProps: {
			color,
			indeterminate,
		},
	})

	$inspect(checkboxProps)
	let labelProps: $$Props = $derived({
		componentName: componentName + '-label',
		tag: 'label',
		for: id,
	})

	let descriptionProps: $$Props = $derived({
		componentName: componentName + '-description',
	})
</script>

<El {...wrapperProps}>
	<El {...checkboxProps} bind:id bind:element />
	{#if label || children}
		<El {...labelProps}>
			{#if children}
				{@render children()}
			{:else}
				{label}
			{/if}
		</El>
	{/if}

	{#if description || descriptionSnippet}
		<El {...descriptionProps}>
			{#if descriptionSnippet}
				{@render descriptionSnippet()}
			{:else}
				{description}
			{/if}
		</El>
	{/if}
</El>
