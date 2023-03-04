<script lang="ts">
	import DatePicker from '../date-picker/DatePicker.svelte'
	import FormField from './FormField.svelte'
	import type { FormDatePickerProps, FormFieldProps } from './Form.types'

	type $$Props = FormDatePickerProps

	export let componentName: $$Props['componentName'] = 'form-datepicker'
	export let required: $$Props['required'] = undefined
	export let state: $$Props['state'] = undefined
	export let value: $$Props['value'] = undefined
	export let innerProps: $$Props['innerProps'] = undefined

	let props: FormFieldProps = {}
	let datePickerProps: $$Props['innerProps'] = {}

	$: {
		props = {
			componentName,
			required,
			state,
		}

		datePickerProps = {
			...innerProps,
			required,
			state,
		}
	}
</script>

<FormField {...props} {...$$restProps}>
	<slot name="label" />
	<DatePicker {...datePickerProps} bind:value on:changed>
		<slot />
	</DatePicker>
	<slot name="hint" />
</FormField>
