<script lang="ts">
	import { El } from '../el'
	import type { FieldsetProps } from './Form.types'

	type $$Props = FieldsetProps

	let {
		componentName = 'fieldset',
		legend,
		children,
		legendSnippet,
		...restProps
	}: $$Props = $props()

	let props: $$Props = $derived({
		...restProps,
		componentName,
		tag: 'fieldset',
		cssProps: {},
	})
</script>

<El {...props}>
	{#if legendSnippet || legend}
		<El tag="legend" componentName="{componentName}-legend">
			{#if legendSnippet}
				{@render legendSnippet()}
			{:else if legend}
				{legend}
			{/if}
		</El>
	{/if}
	{@render children?.()}
</El>
