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
		state,
		value,
		create,
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
		state,
		id,
	})

	let autocompleteProps: $$Props = $derived({
		disabled,
		items,
		key,
		placeholder,
		multiple,
		dismissible,
		name,
		size,
		state,
		create,
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
		<Autocomplete {...autocompleteProps} bind:value bind:id let:item let:index>
			{#if children}
				{@render children?.({ item, index })}
			{:else}
				{item}
			{/if}

			{#snippet selectedSnippet()}
				{#if selectedSnippet}
					{@render selectedSnippet?.({ item, index })}
				{:else}
					{item}
				{/if}
			{/snippet}
		</Autocomplete>

		{#if endSnippet}
			{@render endSnippet()}
		{:else if endIconSnippet}
			<El componentName="{componentName}-icon">
				{@render endIconSnippet()}
			</El>
		{/if}
	{/snippet}
</FormField>
