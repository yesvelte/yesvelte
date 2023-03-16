<script lang="ts">
	import FormField from './FormField.svelte'
	import type { FormSelectProps } from './Form.types'
	import { Select, type SelectProps } from '../select'

	type $$Props = FormSelectProps

	export let items: $$Props['items'] = undefined
	export let value: $$Props['value'] = undefined
	export let name: $$Props['name'] = undefined
	export let size: $$Props['size'] = undefined
	export let disabled: $$Props['disabled'] = undefined
	export let label: $$Props['label'] = undefined
	export let hint: $$Props['hint'] = undefined
	export let required: $$Props['required'] = undefined
	export let placeholder: $$Props['placeholder'] = undefined
	export let state: $$Props['state'] = undefined
	export let componentName: $$Props['componentName'] = 'form-select'

	let selectProps: SelectProps = {}
	let props: $$Props = {}

	$: {
		selectProps = {
			placeholder,
			disabled,
			size,
			items,
			state,
			name,
		}

		props = {
			componentName,
			required,
			label,
			hint,
			state,
		}
	}
</script>

<FormField {...props} {...$$restProps}>
	<slot name="label" />
	<Select {...selectProps} bind:value let:item let:index>
		<slot {index} {item}>{item}</slot>
	</Select>
	<slot name="hint" />
</FormField>
