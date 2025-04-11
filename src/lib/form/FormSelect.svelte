<script lang="ts">
	import FormField from './FormField.svelte'
	import type { FormSelectProps } from './Form.types'
	import { Select, type SelectProps } from '../select'
	import { El } from '../el'

	type $$Props = FormSelectProps

	let {
		items,
		value = $bindable(),
		name,
		size,
		disabled,
		label,
		hint,
		required,
		multiple,
		placeholder,
		state: validationState,
		key,
		componentName = 'form-select',
		children: childrenSnippet,
		labelSnippet,
		hintSnippet,
		startSnippet,
		startIconSnippet,
		endSnippet,
		endIconSnippet,
		onchange,
		onfocus,
		onblur,
		...restProps
	}: $$Props = $props()

	let id: string | undefined = $state(undefined)

	let selectProps: SelectProps = $derived({
		placeholder,
		disabled,
		multiple,
		size,
		items,
		onchange,
		onfocus,
		onblur,
		state: validationState,
		key,
		name,
	})

	let props: $$Props = $derived({
		...restProps,
		componentName,
		labelSnippet,
		hintSnippet,
		required,
		label,
		hint,
		state: validationState,
		id,
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

		<Select {...selectProps} bind:value bind:id>
			{#snippet children({ item, index })}
				{#if childrenSnippet}
					{@render childrenSnippet({ item, index })}
				{:else}
					{item}
				{/if}
			{/snippet}
		</Select>

		{#if endSnippet}
			{@render endSnippet()}
		{:else if endIconSnippet}
			<El componentName="{componentName}-icon">
				{@render endIconSnippet()}
			</El>
		{/if}
	{/snippet}
</FormField>
