<script lang="ts">
	import FormField from './FormField.svelte'
	import { Editor } from '../editor'
	import type { FormEditorProps } from './Form.types'

	type $$Props = FormEditorProps

	let {
		componentName = 'form-editor',
		placeholder,
		readonly,
		required,
		toolbar,
		height,
		name,
		onchanged,
		state: validationState,
		value = $bindable(),
		label,
		hint,
		hintSnippet,
		labelSnippet,
		...restProps
	}: $$Props = $props()

	let id: string | undefined = $state(undefined)

	let props: $$Props = $derived({
		...restProps,
		id,
		required,
		label,
		hint,
		state: validationState,
		hintSnippet,
		labelSnippet,
		componentName,
	})

	let editorProps: $$Props = $derived({
		placeholder,
		readonly,
		required,
		toolbar,
		height,
		onchanged,
		state: validationState,
		name,
	})
</script>

<FormField {...props}>
	<Editor bind:id {...editorProps} bind:value />
</FormField>
