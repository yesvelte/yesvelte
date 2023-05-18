<script lang="ts">
	import { get_current_component } from 'svelte/internal'
	import { El } from '../el'
	import { Popup } from '../popup'
	import type { TooltipProps } from './Tooltip.types'

	type $$Props = TooltipProps

	export let componentName: $$Props['componentName'] = 'tooltip'
	export let arrow: $$Props['arrow'] = true
	export let popupOffset: $$Props['popupOffset'] = 0
	export let trigger: $$Props['trigger'] = 'hover'
	export let text: $$Props['text'] = undefined

	const components = [get_current_component(), ...($$props.components ?? [])]
	$: props = {
		componentName,
		arrow,
		trigger,
		popupOffset,
	}
</script>

<Popup {components} {...$$restProps} {...props}>
	<El componentName="{componentName}-inner">
		<slot>
			{#if text}
				{text}
			{/if}
		</slot>
	</El>
</Popup>
