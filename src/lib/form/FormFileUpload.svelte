<script lang="ts">
	import { FileUpload } from '../file-upload'
	import type { FormFileUploadProps } from './Form.types'
	import FormField from './FormField.svelte'

	type $$Props = FormFileUploadProps

	export let componentName: $$Props['componentName'] = 'form-input'
	export let tag: $$Props['tag'] = 'input'
	export let disabled: $$Props['disabled'] = undefined
	export let accept: $$Props['accept'] = undefined
	export let name: $$Props['name'] = undefined
	export let multiple: $$Props['multiple'] = undefined
	export let placeholder: $$Props['placeholder'] = undefined
	export let required: $$Props['required'] = undefined
	export let size: $$Props['size'] = undefined
	export let state: $$Props['state'] = undefined
	export let files: $$Props['files'] = undefined
	export let label: $$Props['label'] = undefined
	export let hint: $$Props['hint'] = undefined

	let props: $$Props = {}
	let fileUploadProps: $$Props = {}

	$: props = {
		required,
		label,
		hint,
		state,
		componentName,
	}

	$: fileUploadProps = {
		tag,
		placeholder,
		disabled,
		required,
		size,
		state,
		multiple,
		accept,
		name
	}
</script>

<FormField {...props} {...$$restProps}>
	<slot name="label" />
	<FileUpload {...fileUploadProps} bind:files on:change>
		<slot />
	</FileUpload>
	<slot name="hint" />
</FormField>
