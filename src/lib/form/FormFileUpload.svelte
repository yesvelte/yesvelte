<script lang="ts">
	import { FileUpload } from '../file-upload'
	import type { FormFileUploadProps } from './Form.types'
	import FormField from './FormField.svelte'
	import { El } from '../el'

	type $$Props = FormFileUploadProps

	let {
		componentName = 'form-input',
		disabled,
		accept,
		name,
		multiple,
		placeholder,
		required,
		size,
		state: validationState,
		files = $bindable(),
		label,
		hint,
		hintSnippet,
		labelSnippet,
		startSnippet,
		startIconSnippet,
		endSnippet,
		endIconSnippet,
		groupSnippet,
		onchange,
		onfocus,
		onblur,
		...restProps
	}: $$Props = $props()

	let id: string | undefined = $state(undefined)

	let props = $derived({
		...restProps,
		required,
		label,
		hint,
		state: validationState,
		id,
		componentName,
		hintSnippet,
		labelSnippet,
	})

	let fileUploadProps = $derived({
		placeholder,
		disabled,
		required,
		size,
		onchange,
		onfocus,
		onblur,
		state: validationState,
		multiple,
		accept,
		name,
	})
</script>

<FormField {...props}>
	{#snippet groupSnippet()}
		{#if startSnippet}
			{@render startSnippet()}
		{:else if startIconSnippet}
			<El componentName="{componentName}-icon">
				{@render startIconSnippet()}
			</El>
		{/if}
		<FileUpload bind:id {...fileUploadProps} bind:files />
		{#if endSnippet}
			{@render endSnippet()}
		{:else if endIconSnippet}
			<El componentName="{componentName}-icon">
				{@render endIconSnippet()}
			</El>
		{/if}
	{/snippet}
</FormField>
