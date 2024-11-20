<script lang="ts">
	import { El } from '../el'
	import type { ProgressBarProps } from './Progress.types'

	type $$Props = ProgressBarProps

	export let componentName: $$Props['componentName'] = 'progress-bar'
	export let color: $$Props['color'] = undefined
	export let value: $$Props['value'] = undefined
	export let striped: $$Props['striped'] = undefined
	export let label: $$Props['label'] = undefined
	export let indeterminate: $$Props['indeterminate'] = undefined

	let props: $$Props = {}
	let cssProps: $$Props = {}
	let _label: string = ''
	$: {
		cssProps = {
			color,
			striped,
			indeterminate,
		}
		props = {
			componentName,
		}
		_label = label ?? value + '% completed'
	}
</script>

<El
	{...$$restProps}
	{...props}
	{cssProps}
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
