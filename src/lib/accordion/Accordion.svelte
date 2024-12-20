<script lang="ts">
	import { getContext, setContext } from 'svelte'
	import { writable } from 'svelte/store'
	import { El } from '../el'
	import AccordionHeader from './AccordionHeader.svelte'
	import type { AccordionContext, AccordionProps, AccordionsContext } from './Accordion.types'

	type $$Props = AccordionProps

	let {
		componentName = 'accordion',
		open = $bindable(false),
		title,
		children,
		...restProps
	}: $$Props = $props()

	const ctx: AccordionContext = writable({ open })
	setContext('ACCORDION', ctx)

	const parentCtx = getContext<AccordionsContext>('ACCORDIONS')

	parentCtx.update((item: any) => {
		item.children.push(ctx)
		return item
	})

	$effect(() => {
		ctx.update(() => ({ open }))
	})
</script>

<El {...restProps} {componentName}>
	{#if title}
		<AccordionHeader>
			{title}
		</AccordionHeader>
	{/if}
	{@render children?.()}
</El>
