<script lang="ts">
	import { get_current_component } from 'svelte/internal'
	import DatePicker from '../date-picker/DatePicker.svelte'
	import FormField from './FormField.svelte'
	import type { FormDatePickerProps } from './Form.types'

	type $$Props = FormDatePickerProps

	export let disabled: $$Props['disabled'] = undefined
	export let borderRounded: $$Props['borderRounded'] = undefined
	export let borderFlush: $$Props['borderFlush'] = undefined
	export let placeholder: $$Props['placeholder'] = undefined
	export let required: $$Props['required'] = undefined
	export let size: $$Props['size'] = undefined
	export let state: $$Props['state'] = undefined
	export let value: $$Props['value'] = undefined
	export let label: $$Props['label'] = undefined
	export let hint: $$Props['hint'] = undefined
	export let name: $$Props['name'] = undefined

	const components = [
		{ component: get_current_component(), except: ['changed'] },
		...($$props.components ?? []),
	]

	let id: string
	let props: $$Props = {}
	let datePickerProps: $$Props = {}

	$: {
		props = {
			required,
			label,
			hint,
			state,
			id,
		}

		datePickerProps = {
			placeholder,
			disabled,
			required,
			size,
			state,
			borderRounded,
			borderFlush,
			name,
		}
	}
</script>

<FormField {...props} {...$$restProps}>
	<slot name="label" />
	<DatePicker bind:id {components} {...datePickerProps} bind:value on:changed>
		<slot />
	</DatePicker>
	<slot name="hint" />
</FormField>
