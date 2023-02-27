<script lang="ts">
	import { El } from '../el'
	import type { ProgressProps } from './Progress.types'

	type $$Props = ProgressProps

	export let componentName: $$Props['componentName'] = 'progress'
	export let color: $$Props['color'] = undefined
	export let value: $$Props['value'] = undefined
	export let size: $$Props['size'] = undefined
	export let indeterminate: $$Props['indeterminate'] = undefined
	export let striped: $$Props['striped'] = undefined
	export let label: $$Props['label'] = undefined

	let cssProps: $$Props = {}
	let props: $$Props = {}
	let _label: string = ''
	$: {
		cssProps = {
			size,
		}
		props = {
			componentName,
		}
		_label = label ?? value + '% completed'
	}
</script>

<El {...$$restProps} {cssProps} {...props}>
	<El
		cssProps={{ color, indeterminate, striped }}
		componentName="{componentName}-bar"
		role="progressbar"
		style="width: {value}%"
		aria-valuenow={value}
		aria-valuemin="0"
		aria-valuemax="100"
		aria-label={_label}>
		{#if label}
			<El tag="span">{_label}</El>
		{:else}
			<El tag="span" componentName="{componentName}-bar-visually-hidden">{value}% Complete</El>
		{/if}
	</El>
</El>
