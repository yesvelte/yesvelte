<script lang="ts">
	import { El } from '../el'
	import { Popup } from '../popup'
	import type { TooltipProps } from './Tooltip.types'

	type $$Props = TooltipProps

	let {
		componentName = 'tooltip',
		arrow = true,
		popupOffset = 0,
		trigger = 'hover',
		text,
		children,
		...restProps
	}: $$Props = $props()

	let props: $$Props = $derived({
		...restProps,
		componentName,
		arrow,
		trigger,
		popupOffset,
	})
</script>

<Popup {...props}>
	<El componentName="{componentName}-inner">
		{#if children}
			{@render children()}
		{:else if text}
			{text}
		{/if}
	</El>
</Popup>
