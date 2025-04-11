<script lang="ts">
	import { Autocomplete } from '../autocomplete'
	import type { FormAutocompleteProps } from './Form.types'
	import FormField from './FormField.svelte'
	import { El } from '../el'

	type $$Props = FormAutocompleteProps

	let {
		componentName = 'form-autocomplete',
		disabled,
		hint,
		items,
		key,
		label,
		name,
		placeholder,
		required,
		multiple,
		dismissible,
		size,
		state: validationState,
		value = $bindable(),
		create,
		onchange,
		onblur,
		onfocus,
		children,
		selectedSnippet,
		labelSnippet,
		hintSnippet,
		startSnippet,
		startIconSnippet,
		endSnippet,
		endIconSnippet,
		...restProps
	}: $$Props = $props()

	let id: string | undefined = $state(undefined)

	let props: $$Props = $derived({
		...restProps,
		labelSnippet,
		hintSnippet,
		componentName,
		required,
		label,
		hint,
		state: validationState,
		id,
	})

	let autocompleteProps: $$Props = $derived({
		disabled,
		items,
		key,
		placeholder,
		multiple,
		dismissible,
		onchange,
		onblur,
		onfocus,
		name,
		size,
		state: validationState,
		create,
		children,
		selectedSnippet,
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
		<Autocomplete {...autocompleteProps} bind:value bind:id />

		{#if endSnippet}
			{@render endSnippet()}
		{:else if endIconSnippet}
			<El componentName="{componentName}-icon">
				{@render endIconSnippet()}
			</El>
		{/if}
	{/snippet}
</FormField>
