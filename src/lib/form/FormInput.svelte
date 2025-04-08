<script lang="ts">
	import { Input } from '../input'
	import type { FormInputProps } from './Form.types'
	import FormField from './FormField.svelte'
	import { El } from '../el'

	type $$Props = FormInputProps

	let {
		componentName = 'form-input',
		disabled,
		borderRounded,
		borderFlush,
		mask,
		maskOptions,
		placeholder,
		readonly,
		required,
		size,
		state: validationState,
		type,
		value = $bindable(),
		label,
		hint,
		name,
		min,
		max,
		minlength,
		maxlength,
		pattern,
		step,
		startIconSnippet,
		endIconSnippet,
		startSnippet,
		endSnippet,
		labelSnippet,
		hintSnippet,
		onchange,
		onfocus,
		onblur,
		...restProps
	}: $$Props = $props()

	let id: string | undefined = $state(undefined)

	let props: $$Props = $derived({
		...restProps,
		required,
		label,
		hint,
		state: validationState,
		componentName,
		id,
	})
	let inputProps: $$Props = $derived({
		placeholder,
		disabled,
		readonly,
		type,
		required,
		size,
		onchange,
		onfocus,
		onblur,
		state: validationState,
		borderRounded,
		borderFlush,
		mask,
		maskOptions,
		name,
		min,
		max,
		minlength,
		maxlength,
		pattern,
		step,
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

		<Input bind:id {...inputProps} bind:value />

		{#if endSnippet}
			{@render endSnippet()}
		{:else if endIconSnippet}
			<El componentName="{componentName}-icon">
				{@render endIconSnippet()}
			</El>
		{/if}
	{/snippet}
</FormField>
