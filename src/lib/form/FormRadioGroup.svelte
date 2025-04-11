<script lang="ts">
	import FormField from './FormField.svelte'
	import type { FormRadioGroupProps } from './Form.types'
	import RadioGroup from '../radio/RadioGroup.svelte'

	type $$Props = FormRadioGroupProps

	let {
		color,
		inline,
		items,
		key,
		reverse,
		value = $bindable(),
		name,
		labelSnippet,
		hintSnippet,
		children: childrenSnippet,
		onchange,
		onfocus,
		onblur,
		componentName = 'form-radio-group',
		...restProps
	}: $$Props = $props()

	let radioGroupProps: $$Props = $derived({
		color,
		inline,
		reverse,
		items,
		name,
		key,
		onchange,
		onfocus,
		onblur,
	})

	let props: any = $derived({
		...restProps,
		componentName,
		labelSnippet,
		hintSnippet,
	})
</script>

<FormField {...props} {componentName}>
	<RadioGroup {...radioGroupProps} bind:value>
		{#snippet children({ item, index })}
			{#if childrenSnippet}
				{@render childrenSnippet({ item, index })}
			{:else}
				{item}
			{/if}
		{/snippet}
	</RadioGroup>
</FormField>
