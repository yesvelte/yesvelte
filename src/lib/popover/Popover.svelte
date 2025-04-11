<script lang="ts">
	import { Popup } from '../popup'
	import type { PopoverProps } from './Popover.types'
	import PopoverHeader from './PopoverHeader.svelte'

	type $$Props = PopoverProps

	let {
		componentName = 'popover',
		arrow = true,
		popupOffset = 8,
		title,
		trigger = 'click',
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
	{#if title}
		<PopoverHeader>{title}</PopoverHeader>
	{/if}
	{@render children?.()}
</Popup>
