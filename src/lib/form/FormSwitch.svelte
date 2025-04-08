<script lang="ts">
	import FormField from './FormField.svelte'
	import { Switch, type SwitchProps } from '../switch'
	import type { FormSwitchProps } from './Form.types'

	type $$Props = FormSwitchProps

	let {
		componentName = 'form-switch',
		label,
		hint,
		name,
		state: validationState,
		color,
		required,
		disabled,
		description,
		reverse,
		value = $bindable(),
		checked = $bindable(),
		inline,
		labelSnippet,
		hintSnippet,
		children,
		onchange,
		onfocus,
		onblur,
		...restProps
	}: $$Props = $props()

	let id: string | undefined = $state(undefined)

	let props = $derived({
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

	let switchProps = $derived({
		color,
		inline,
		onchange,
		onfocus,
		onblur,
		description,
		reverse,
		disabled,
		name,
	})
</script>

<FormField {...props}>
	<Switch bind:id bind:checked {...switchProps} {value}>
		{@render children?.()}
	</Switch>
</FormField>
