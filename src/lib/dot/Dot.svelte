<script lang="ts">
	import { El } from '../el'
	import type { DotProps } from './Dot.types'

	type $$Props = DotProps

	let {
		animated,
		color,
		componentName = 'dot',
		indicator,
		tag = 'span',
		children,
		...restProps
	}: $$Props = $props()

	let props: $$Props = $derived({
		...restProps,
		componentName,
		tag,
		cssProps: {
			animated,
			color,
			indicator,
		},
	})
</script>

<El {...props}>
	{#if indicator}
		<El componentName="dot-indicator-circle" />
		<El componentName="dot-indicator-circle" />
		<El componentName="dot-indicator-circle" />
	{/if}
</El>
