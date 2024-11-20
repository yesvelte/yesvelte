<script lang="ts">
	import { El } from '../el'
	import type { DotProps } from './Dot.types'

	type $$Props = DotProps

	export let animated: $$Props['animated'] = undefined
	export let color: $$Props['color'] = undefined
	export let componentName: $$Props['componentName'] = 'dot'
	export let indicator: $$Props['indicator'] = undefined
	export let tag: $$Props['tag'] = 'span'

	let cssProps: DotProps = {}
	let props: DotProps = {}
	$: {
		cssProps = {
			animated,
			color,
			indicator,
		}
		props = {
			tag,
			componentName,
		}
	}
</script>

<El {...$$restProps} {cssProps} {...props}>
	{#if indicator}
		<El componentName="dot-indicator-circle" />
		<El componentName="dot-indicator-circle" />
		<El componentName="dot-indicator-circle" />
	{/if}
</El>
