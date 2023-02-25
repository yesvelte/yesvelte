<script lang="ts">
	import { FormField, type FormSelectProps, Select, type SelectProps } from '$lib/components'

	type $$Props = FormSelectProps

	/**
	 * Select items
	 */
	export let items: $$Props['items']

	/**
	 * Value that selected options are bound to
	 */
	export let value: $$Props['value'] = undefined

	/**
	 * Set the size of the select component
	 */
	export let size: $$Props['size'] = undefined

	/**
	 * Set select as disabled
	 */
	export let disabled: $$Props['disabled'] = undefined

	/**
	 * Set the text label of FormSelect
	 */
	export let label: $$Props['label'] = undefined

	/**
	 * Define hint for the FormField
	 */
	export let hint: $$Props['hint'] = undefined

	/**
	 * Set the FormSelect required
	 */
	export let required: $$Props['required'] = undefined

	/**
	 * Set placeholder for the select
	 */
	export let placeholder: $$Props['placeholder'] = undefined

	/**
	 * Set the state of FormSelect
	 */
	export let state: $$Props['state'] = undefined

	let selectProps: SelectProps = {}
	let props: any = {}

	$: {
		selectProps = {
			placeholder,
			disabled,
			size,
			items,
			state,
		}

		props = {
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
