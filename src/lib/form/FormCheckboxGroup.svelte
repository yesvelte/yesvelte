<script lang="ts">
	import FormField from './FormField.svelte'
	import CheckboxGroup from '../checkbox/CheckboxGroup.svelte'
	import type { FormCheckboxGroupProps } from './Form.types'

	type $$Props = FormCheckboxGroupProps

	let {
		color,
		componentName,
		inline,
		items,
		reverse,
		value,
		name,
		key,
		children,
		labelSnippet,
		hintSnippet,
		...restProps
	}: $$Props = $props()

	let checkboxGroupProps: $$Props = $derived({
		color,
		inline,
		items,
		reverse,
		name,
		key,
	})

	let props: $$Props = $derived({
		...restProps,
		componentName,
		labelSnippet,
		hintSnippet,
	})
</script>

<FormField {...props}>
	<CheckboxGroup {children} {...checkboxGroupProps} bind:value />
</FormField>
