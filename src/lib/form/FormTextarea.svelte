<script lang="ts">
	import FormField from './FormField.svelte'
	import { Textarea } from '../textarea'
	import type { FormTextAreaProps } from './Form.types'

	type $$Props = FormTextAreaProps

	export let componentName: $$Props['componentName'] = 'form-textarea'
	export let tag: $$Props['tag'] = 'textarea'
	export let required: $$Props['required'] = undefined
	export let state: $$Props['state'] = undefined
	export let innerProps: $$Props['innerProps'] = undefined

	export let value: $$Props['value'] = undefined

	let props: $$Props = {}
	let teaxtareaProps: $$Props['innerProps'] = {}

	$: {
		props = {
			componentName,
			required,
			state,
		}

		teaxtareaProps = {
			...innerProps,
			required,
			state,
			tag,
		}
	}
</script>

<FormField {...props} {...$$restProps}>
	<slot name="label" />
	<Textarea {...teaxtareaProps} bind:value />
	<slot name="hint" />
</FormField>
