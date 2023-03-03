<script lang="ts">
	import DatePicker from '../date-picker/DatePicker.svelte'
	import FormField from './FormField.svelte'
	import type { FormDatePickerProps, FormFieldProps } from './Form.types'

	type $$Props = FormDatePickerProps

	// export let disabled: $$Props['disabled'] = undefined
	// export let borderRounded: $$Props['borderRounded'] = undefined
	// export let borderFlush: $$Props['borderFlush'] = undefined
	// export let placeholder: $$Props['placeholder'] = undefined
	export let required: $$Props['required'] = undefined
	// export let size: $$Props['size'] = undefined
	export let state: $$Props['state'] = undefined
	export let value: $$Props['value'] = undefined
	export let label: $$Props['label'] = undefined
	export let hint: $$Props['hint'] = undefined
	export let innerProps: $$Props['innerProps'] = undefined

	let props: FormFieldProps = {}
	let datePickerProps: $$Props['innerProps'] = {}

	$: {
		props = {
			required,
			label,
			hint,
			state,
		}

		datePickerProps = {
			...innerProps,
			// placeholder,
			// disabled,
			required,
			// size,
			state,
			// borderRounded,
			// borderFlush,
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
