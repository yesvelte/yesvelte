<script lang="ts">
	import { FileUpload } from '../file-upload'
	import type { FormFileUploadProps } from './Form.types'
	import FormField from './FormField.svelte'

	type $$Props = FormFileUploadProps

	export let componentName: $$Props['componentName'] = 'form-input'
	export let innerProps: $$Props['innerProps'] = undefined
	export let required: $$Props['required'] = undefined
	export let state: $$Props['state'] = undefined
	export let tag: $$Props['tag'] = 'input'

	export let files: $$Props['files'] = undefined

	let props: $$Props = {}
	let fileUploadProps: $$Props['innerProps'] = {}

	$: props = {
		componentName,
		required,
		state,
	}

	$: fileUploadProps = {
		...innerProps,
		required,
		state,
		tag,
	}
</script>

<FormField {...props} {...$$restProps}>
	<slot name="label" />
	<FileUpload {...fileUploadProps} bind:files on:change>
		<slot />
	</FileUpload>
	<slot name="hint" />
</FormField>
