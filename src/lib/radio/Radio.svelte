<script lang="ts">
	import { El } from '../el'
	import type { RadioProps } from './Radio.types'

	type $$Props = RadioProps

	let {
		componentName = 'radio',
		color,
		description,
		disabled,
		inline,
		reverse,
		label,
		name,
		for: labelForId,
		readonly,
		checked = false,
		value,
		children,
		descriptionSnippet,
		...restProps
	}: $$Props = $props()

	export { labelForId as for }

	let id: string | undefined = $state(undefined)

	let otherProps: $$Props = $derived({
		...restProps,
		componentName,
		disabled,
		readonly,
		value,
		checked,
		tag: 'input',
		type: 'radio',
		name,
		cssProps: { color },
	})
</script>

<El componentName="{componentName}-wrapper" cssProps={{ inline, reverse }}>
	<El bind:id {...otherProps} />
	{#if label || children}
		<El tag="label" componentName="{componentName}-label" for={id}>
			{#if children}
				{@render children()}
			{:else}
				{label}
			{/if}
		</El>
	{/if}

	{#if description || descriptionSnippet}
		<El componentName="{componentName}-description">
			{#if descriptionSnippet}
				{@render descriptionSnippet()}
			{:else}
				{description}
			{/if}
		</El>
	{/if}
</El>
