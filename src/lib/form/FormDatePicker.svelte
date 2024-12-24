<script lang="ts">
	import DatePicker from '../date-picker/DatePicker.svelte'
	import FormField from './FormField.svelte'
	import type { FormDatePickerProps } from './Form.types'
	import { El } from '../el'

	type $$Props = FormDatePickerProps

	let {
		componentName = 'form-date-picker',
		disabled,
		borderRounded,
		borderFlush,
		placeholder,
		range,
		required,
		options,
		size,
		state: validationState,
		value,
		label,
		hint,
		name,
		startIconSnippet,
		endIconSnippet,
		startSnippet,
		endSnippet,
		labelSnippet,
		hintSnippet,
		groupSnippet,
		...restProps
	}: $$Props = $props()

	let id: string | undefined = $state(undefined)

	let props: $$Props = $derived({
		...restProps,
		componentName,
		required,
		label,
		hint,
		state: validationState,
		id,
		labelSnippet,
		hintSnippet,
	})

	let datePickerProps: $$Props = $derived({
		placeholder,
		disabled,
		required,
		options,
		size,
		state: validationState,
		range,
		borderRounded,
		borderFlush,
		name,
	})
</script>

<FormField {...props}>
	{#if groupSnippet}
		{@render groupSnippet()}
	{:else}
		{#if startSnippet}
			{@render startSnippet()}
		{:else if startIconSnippet}
			<El componentName="{componentName}-icon">
				{@render startIconSnippet()}
			</El>
		{/if}

		<DatePicker bind:id {...datePickerProps} bind:value />

		{#if endSnippet}
			{@render endSnippet()}
		{:else if endIconSnippet}
			<El componentName="{componentName}-icon">
				{@render endIconSnippet()}
			</El>
		{/if}
	{/if}
</FormField>
