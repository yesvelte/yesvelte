<script lang="ts">
	import { El } from '../el'
	import type { ProgressBarProps } from './Progress.types'

	type $$Props = ProgressBarProps

	let {
		componentName = 'progress-bar',
		color,
		value,
		striped,
		label,
		indeterminate,
		...restProps
	}: $$Props = $props()

	let props: $$Props = $derived({
		...restProps,
		componentName,
		cssProps: {
			color,
			striped,
			indeterminate,
		},
	})

	let _label = $derived(label ?? value + '% completed')
</script>

<El
	{...props}
	{componentName}
	role="progressbar"
	style="width: {value}%"
	aria-valuenow={+(value || 0)}
	aria-label={_label}>
	{#if label}
		<El tag="span">{_label}</El>
	{:else}
		<El tag="span" componentName="{componentName}-visually-hidden">{value}% Complete</El>
	{/if}
</El>
