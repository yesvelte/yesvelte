<script lang="ts">
	import { Input } from '../input'
	import type { FormFieldProps, FormInputProps } from './Form.types'
	import FormField from './FormField.svelte'

	type $$Props = FormInputProps

	export let componentName: $$Props['componentName'] = 'form-input'
	export let innerProps: $$Props['innerProps'] = undefined
	export let required: $$Props['required'] = undefined
	export let state: $$Props['state'] = undefined

	export let value: $$Props['value'] = undefined

	let props: FormFieldProps = {}
	let inputProps: $$Props['innerProps'] = {}

	$: props = {
		componentName,
		required,
		state,
	}

	$: inputProps = {
		...innerProps,
		required,
		state,
	}
</script>

<FormField {...props} {...$$restProps}>
	<slot name="label" />
	<Input {...inputProps} bind:value>
		<slot />
	</Input>
	<slot name="hint" />
</FormField>
