<script lang="ts">
	import { Popup } from '../popup'
	import type { PopoverProps } from './Popover.types'
	import PopoverHeader from './PopoverHeader.svelte'

	type $$Props = PopoverProps

	export let componentName: $$Props['componentName'] = 'popover'
	export let arrow: $$Props['arrow'] = true
	export let popupOffset: $$Props['popupOffset'] = 8
	export let title: $$Props['title'] = undefined
	export let trigger: $$Props['trigger'] = 'click'

	$: props = {
		componentName,
		arrow,
		trigger,
		popupOffset,
	}
</script>

<Popup {...$$restProps} {...props}>
	{#if title}
		<PopoverHeader>{title}</PopoverHeader>
	{/if}
	<slot />
</Popup>
