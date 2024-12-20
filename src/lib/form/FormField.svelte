<script lang="ts">
	import { El } from '../el'
	import { Label } from '../label'
	import type { FormFieldProps } from './Form.types'

	type $$Props = FormFieldProps

	let {
		componentName = 'form-field',
		label,
		id,
		hint,
		required,
		state,
		children,
		labelSnippet,
		hintSnippet,
		groupSnippet,
		...restProps
	}: $$Props = $props()
</script>

<El {...restProps} {componentName}>
	{#if label}
		<Label for={id} {required}>{label}</Label>
	{/if}
	{@render labelSnippet?.()}
	{#if children}
		{@render children?.()}
	{:else}
		<El componentName="{componentName}-group">
			{@render groupSnippet?.()}
		</El>
	{/if}
	{@render hintSnippet?.()}
	{#if hint}
		<El componentName={componentName + '-hint'} cssProps={{ state }}>
			{hint}
		</El>
	{/if}
</El>
