<script lang="ts">
	import { El } from '../el'
	import { Label } from '../label'
	import type { SwitchProps } from './Switch.types'

	type $$Props = SwitchProps

	let {
		componentName = 'switch',
		tag = 'input',
		id = $bindable(),
		color,
		disabled,
		description,
		inline,
		name,
		label,
		value = $bindable(),
		reverse = false,
		checked = $bindable(),
		role = 'switch',
		type = 'checkbox',
		children,
		descriptionSnippet,
		...restProps
	}: $$Props = $props()

	function onchange(event: any) {
		restProps.onchange?.(event)
		checked = event.target.checked
		value = event.target.checked
	}

	let props: $$Props = $derived({
		...restProps,
		tag,
		checked,
		componentName,
		label,
		role,
		disabled,
		type,
		name,
		onchange,
		cssProps: {
			color,
		},
	})
</script>

<El componentName="{componentName}-wrapper" cssProps={{ inline, reverse }}>
	<El bind:id {...props} />
	{#if label || children}
		<Label for={id} componentName="{componentName}-label">
			{#if children}
				{@render children()}
			{:else}
				{label}
			{/if}
		</Label>
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
