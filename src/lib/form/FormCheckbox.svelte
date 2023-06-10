<!-- @css:form-checkbox -->
<script lang="ts">
	import { get_current_component } from 'svelte/internal'
	import { Checkbox } from '../checkbox'
	import type { FormCheckboxProps } from './Form.types'
	import FormField from './FormField.svelte'

	type $$Props = FormCheckboxProps

	export let label: $$Props['label'] = undefined
	export let hint: $$Props['hint'] = undefined
	export let state: $$Props['state'] = undefined
	export let required: $$Props['required'] = undefined
	export let componentName: $$Props['componentName'] = 'form-checkbox'

	export let color: $$Props['color'] = undefined
	export let disabled: $$Props['disabled'] = undefined
	export let description: $$Props['description'] = undefined
	export let reverse: $$Props['reverse'] = undefined
	export let value: $$Props['value'] = undefined
	export let checked: $$Props['checked'] = undefined
	export let indeterminate: $$Props['indeterminate'] = undefined
	export let inline: $$Props['inline'] = undefined
	export let name: $$Props['name'] = undefined
	export let forwardEvents: $$Props['forwardEvents'] = []

	let id: string
	const components = [
		{ component: get_current_component(), except: [] },
		...($$props.components ?? []),
	]

	$: props = {
		required,
		label,
		hint,
		state,
		id,
		componentName,
	}

	$: checkboxProps = {
		color,
		inline,
		description,
		reverse,
		indeterminate,
		disabled,
		name,
	}
</script>

<FormField {...props} {...$$restProps}>
	<slot name="label" />
	<Checkbox bind:id {...checkboxProps} bind:checked bind:value {components}>
		<slot />
	</Checkbox>
	<slot name="hint" />
</FormField>
