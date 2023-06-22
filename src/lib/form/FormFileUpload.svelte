<script lang="ts">
	import { get_current_component } from 'svelte/internal'
	import { FileUpload } from '../file-upload'
	import type { FormFileUploadProps } from './Form.types'
	import FormField from './FormField.svelte'
	import { El } from '../el'

	type $$Props = FormFileUploadProps

	export let componentName: $$Props['componentName'] = 'form-input'
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

	const components = [
		{ component: get_current_component(), except: [] },
		...($$props.components ?? []),
	]

	let id: string
	let props: $$Props = {}
	let fileUploadProps: $$Props = {}

	$: props = {
		required,
		label,
		hint,
		state,
		id,
		componentName,
	}

	$: fileUploadProps = {
		placeholder,
		disabled,
		required,
		size,
		state,
		multiple,
		accept,
		name,
	}
</script>

<FormField {...props} {...$$restProps}>
	<slot name="label" slot="label" />
	<svelte:fragment slot="group">
		<slot name="start">
			{#if $$slots['start-icon']}
				<El componentName="{componentName}-icon">
					<slot name="start-icon" />
				</El>
			{/if}
		</slot>
		<FileUpload {components} bind:id {...fileUploadProps} bind:files />

		<slot name="end">
			{#if $$slots['end-icon']}
				<El componentName="{componentName}-icon">
					<slot name="end-icon" />
				</El>
			{/if}
		</slot>
	</svelte:fragment>
	<slot name="hint" slot="hint" />
</FormField>
