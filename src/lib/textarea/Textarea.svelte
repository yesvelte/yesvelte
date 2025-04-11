<script lang="ts">
	import { El } from '../el'
	import type { TextareaProps } from './Textarea.types'

	type $$Props = TextareaProps

	let {
		componentName = 'textarea',
		tag = 'textarea',
		disabled,
		borderRounded,
		borderFlush,
		placeholder,
		readonly,
		rows,
		name,
		size,
		state,
		type,
		value = $bindable(),
		id = $bindable(),
		minlength,
		maxlength,
		cols,
		startSnippet,
		endSnippet,
		...restProps
	}: $$Props = $props()

	let props: $$Props = $derived({
		componentName,
		tag,
		placeholder,
		disabled,
		cssProps: {
			size,
			state,
			borderRounded,
			borderFlush,
		},
		readonly,
		type,
		rows,
		name,
		minlength,
		maxlength,
		cols,
	})
</script>

{#if startSnippet || endSnippet}
	<El componentName="{componentName}-wrapper" {...restProps} cssProps={{ size }}>
		{#if startSnippet}
			<El tag="span" componentName="{componentName}-icon">
				{@render startSnippet()}
			</El>
		{/if}
		<El bind:id tag="textarea" bind:value {...props} />
		{#if endSnippet}
			<El tag="span" componentName="{componentName}-icon">
				{@render endSnippet()}
			</El>
		{/if}
	</El>
{:else}
	<El bind:id tag="textarea" bind:value {...props} {...restProps}/>
{/if}
