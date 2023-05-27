<script lang="ts">
	import FormField from './FormField.svelte'
	import { Editor } from '../editor'
	import type { FormEditorProps } from './Form.types'

	import { get_current_component } from 'svelte/internal'

	type $$Props = FormEditorProps

	export let componentName: $$Props['componentName'] = 'form-editor'
	export let placeholder: $$Props['placeholder'] = undefined
	export let readonly: $$Props['readonly'] = undefined
	export let required: $$Props['required'] = undefined
	export let toolbar: $$Props['toolbar'] = undefined
	export let height: $$Props['height'] = undefined
	export let name: $$Props['name'] = undefined
	export let state: $$Props['state'] = undefined
	export let value: $$Props['value'] = undefined
	export let label: $$Props['label'] = undefined
	export let hint: $$Props['hint'] = undefined

	const components = [
		{ component: get_current_component(), except: [] },
		...($$props.components ?? []),
	]
	let id: string
	let props: $$Props = {}
	let editorProps: $$Props = {}

	$: {
		props = {
			required,
			label,
			hint,
			state,
			componentName,
		}

		editorProps = {
			placeholder,
			readonly,
			required,
			toolbar,
			height,
			state,
			name,
		}
	}
</script>

<FormField {id} {...props} {...$$restProps}>
	<slot name="label" />
	<Editor bind:id {components} {...editorProps} on:changed bind:value />
	<slot name="hint" />
</FormField>
