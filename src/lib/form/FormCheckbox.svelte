<script lang="ts">
	import { Checkbox } from '../checkbox'
	import type { FormCheckboxProps } from './Form.types'
	import FormField from './FormField.svelte'

	type $$Props = FormCheckboxProps

	let {
		label,
		hint,
		state: validationState,
		required,
		componentName = 'form-checkbox',
		color,
		disabled,
		description,
		reverse,
		value = $bindable(),
		checked = $bindable(),
		onchange,
		onblur,
		onfocus,
		indeterminate,
		inline,
		name,
		children,
		labelSnippet,
		hintSnippet,
		...restProps
	}: $$Props = $props()

	let id: string | undefined = $state(undefined)

	let props: $$Props = $derived({
		...restProps,
		required,
		label,
		hint,
		state: validationState,
		id,
		componentName,
		labelSnippet,
		hintSnippet,
	})

	let checkboxProps = $derived({
		color,
		inline,
		description,
		onchange,
		onblur,
		onfocus,
		reverse,
		indeterminate,
		disabled,
		name,
		value,
	})
</script>

<FormField {...props}>
	<Checkbox bind:id {...checkboxProps} bind:checked>
		{@render children?.()}
	</Checkbox>
</FormField>
