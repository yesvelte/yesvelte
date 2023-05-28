<script lang="ts">
	import { get_current_component } from 'svelte/internal'
	import { Popup } from '../popup'
	import type { PopoverProps } from './Popover.types'
	import PopoverHeader from './PopoverHeader.svelte'

	type $$Props = PopoverProps

	export let componentName: $$Props['componentName'] = 'popover'
	export let arrow: $$Props['arrow'] = true
	export let popupOffset: $$Props['popupOffset'] = 8
	export let title: $$Props['title'] = undefined
	export let trigger: $$Props['trigger'] = 'click'

	const components = [
		{ component: get_current_component(), except: [] },
		...($$props.components ?? []),
	]

	$: props = {
		componentName,
		arrow,
		trigger,
		popupOffset,
	}
</script>

<Popup {components} {...$$restProps} {...props}>
	{#if title}
		<PopoverHeader>{title}</PopoverHeader>
	{/if}
	<slot />
</Popup>
