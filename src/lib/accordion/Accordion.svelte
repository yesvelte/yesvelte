<script lang="ts">
	import { getContext, setContext } from 'svelte'
	import { writable } from 'svelte/store'
	import { El } from '../el'
	import AccordionHeader from './AccordionHeader.svelte'
	import type { AccordionContext, AccordionProps, AccordionsContext } from './Accordion.types'

	import { get_current_component } from 'svelte/internal'
	const components = [
		{ component: get_current_component(), except: [] },
		...($$props.components ?? []),
	]

	type $$Props = AccordionProps

	export let componentName: $$Props['componentName'] = 'accordion'
	export let open: $$Props['open'] = false
	export let title: $$Props['title'] = undefined

	const ctx: AccordionContext = writable({ open })
	setContext('ACCORDION', ctx)

	const parentCtx = getContext<AccordionsContext>('ACCORDIONS')

	parentCtx.update((item: any) => {
		item.children.push(ctx)
		return item
	})

	$: ctx.update(() => ({open}))
</script>

<El {components} {...$$restProps} {componentName}>
	{#if title}
		<AccordionHeader>
			{title}
		</AccordionHeader>
	{/if}
	<slot />
</El>
