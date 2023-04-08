<script lang="ts">
	import { Input } from '../input'
	import type { FormInputProps } from './Form.types'
	import FormField from './FormField.svelte'

	type $$Props = FormInputProps

	export let componentName: $$Props['componentName'] = 'form-input'
	export let tag: $$Props['tag'] = 'input'
	export let disabled: $$Props['disabled'] = undefined
	export let borderRounded: $$Props['borderRounded'] = undefined
	export let borderFlush: $$Props['borderFlush'] = undefined
	export let mask: $$Props['mask'] = undefined
	export let maskOptions: $$Props['maskOptions'] = undefined
	export let placeholder: $$Props['placeholder'] = undefined
	export let readonly: $$Props['readonly'] = undefined
	export let required: $$Props['required'] = undefined
	export let size: $$Props['size'] = undefined
	export let state: $$Props['state'] = undefined
	export let type: $$Props['type'] = undefined
	export let value: $$Props['value'] = undefined
	export let label: $$Props['label'] = undefined
	export let hint: $$Props['hint'] = undefined
	export let name: $$Props['name'] = undefined
	export let min: $$Props['min'] = undefined
	export let max: $$Props['max'] = undefined
	export let minlength: $$Props['minlength'] = undefined
	export let maxlength: $$Props['maxlength'] = undefined
	export let pattern: $$Props['pattern'] = undefined
	export let step: $$Props['step'] = undefined

	let props: $$Props = {}
	let inputProps: $$Props = {}

	$: props = {
		required,
		label,
		hint,
		state,
		componentName,
	}

	$: inputProps = {
		tag,
		placeholder,
		disabled,
		readonly,
		type,
		required,
		size,
		state,
		borderRounded,
		borderFlush,
		mask,
		maskOptions,
		name,
		min,
		max,
		minlength,
		maxlength,
		pattern,
		step,
	}
</script>

<FormField {...props} {...$$restProps}>
	<slot name="label" />
	<Input on:click on:change on:input on:focus on:blur {...inputProps} bind:value>
		<slot />
	</Input>
	<slot name="hint" />
</FormField>
