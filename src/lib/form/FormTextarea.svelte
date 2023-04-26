<script lang="ts">
	import FormField from './FormField.svelte'
	import { Textarea } from '../textarea'
	import type { FormTextAreaProps } from './Form.types'

	type $$Props = FormTextAreaProps

	export let componentName: $$Props['componentName'] = 'form-textarea'
	export let tag: $$Props['tag'] = 'textarea'
	export let disabled: $$Props['disabled'] = undefined
	export let borderRounded: $$Props['borderRounded'] = undefined
	export let borderFlush: $$Props['borderFlush'] = undefined
	export let placeholder: $$Props['placeholder'] = undefined
	export let readonly: $$Props['readonly'] = undefined
	export let required: $$Props['required'] = undefined
	export let rows: $$Props['rows'] = 3
	export let name: $$Props['name'] = undefined
	export let size: $$Props['size'] = undefined
	export let state: $$Props['state'] = undefined
	export let type: $$Props['type'] = undefined
	export let value: $$Props['value'] = undefined
	export let label: $$Props['label'] = undefined
	export let hint: $$Props['hint'] = undefined
	export let minlength: $$Props['minlength'] = undefined
	export let maxlength: $$Props['maxlength'] = undefined
	export let cols: $$Props['cols'] = undefined

	let id: string
	let props: $$Props = {}
	let teaxtareaProps: $$Props = {}

	$: {
		props = {
			required,
			label,
			hint,
			state,
			componentName,
		}

		teaxtareaProps = {
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
			rows,
			name,
			minlength,
			maxlength,
			cols,
		}
	}
</script>

<FormField {id} {...props} {...$$restProps}>
	<slot name="label" />
	<Textarea bind:id on:click on:change on:input on:focus on:blur {...teaxtareaProps} bind:value />
	<slot name="hint" />
</FormField>
