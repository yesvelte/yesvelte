<script lang="ts">
	import FormField from './FormField.svelte'
	import { Textarea } from '../textarea'
	import type { FormTextAreaProps } from './Form.types'

	import { El } from '../el'

	type $$Props = FormTextAreaProps

	let {
		componentName = 'form-textarea',
		tag = 'textarea',
		disabled,
		borderRounded,
		borderFlush,
		placeholder,
		readonly,
		required,
		rows = 3,
		name,
		size,
		state: validationState,
		type,
		value = $bindable(),
		label,
		hint,
		minlength,
		maxlength,
		cols,
		groupSnippet,
		startSnippet,
		startIconSnippet,
		endSnippet,
		endIconSnippet,
		hintSnippet,
		labelSnippet,
		onchange,
		onfocus,
		onblur,
		...restProps
	} = $props()

	let id: string | undefined = $state(undefined)

	let props = $derived({
		...restProps,
		required,
		label,
		hint,
		state: validationState,
		componentName,
		hintSnippet,
		labelSnippet,
	})

	let teaxtareaProps = $derived({
		tag,
		placeholder,
		disabled,
		readonly,
		type,
		required,
		size,
		state: validationState,
		borderRounded,
		borderFlush,
		onchange,
		onfocus,
		onblur,
		rows,
		name,
		minlength,
		maxlength,
		cols,
	})
</script>

<FormField {id} {...props}>
	{#snippet groupSnippet()}
		{#if startSnippet}
			{@render startSnippet()}
		{:else if startIconSnippet}
			<El componentName="{componentName}-icon">
				{@render startIconSnippet()}
			</El>
		{/if}
		<Textarea bind:id {...teaxtareaProps} bind:value />

		{#if endSnippet}
			{@render endSnippet()}
		{:else if endIconSnippet}
			<El componentName="{componentName}-icon">
				{@render endIconSnippet()}
			</El>
		{/if}
	{/snippet}
</FormField>
