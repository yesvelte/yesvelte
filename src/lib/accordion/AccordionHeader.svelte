<script lang="ts">
	import { createEventDispatcher, getContext } from 'svelte'
	import { El } from '../el'
	import type { AccordionContext, AccordionsContext, AccordionHeaderProps } from './Accordion.types'

	type $$Props = AccordionHeaderProps

	let { componentName = 'accordion-header', ...restProps }: $$Props = $props()

	const parentCtx = getContext<AccordionsContext>('ACCORDIONS')
	const ctx = getContext<AccordionContext>('ACCORDION')

	let props: AccordionHeaderProps = $derived({
		...restProps,
		componentName,
		show: $ctx.open,
	})

	let cssProps: AccordionHeaderProps = $derived({
		collapsed: !$ctx.open,
	})

	let show = $derived($ctx.open)

	const onClick = () => {
		restProps.onclick?.()
		if ($parentCtx.persistent) {
			$parentCtx.children.forEach((childCtx) => {
				childCtx.set({ open: false })
			})
		}
		$ctx.open = !$ctx.open
	}
</script>

<El {...props}>
	<El tag="button" componentName={componentName + '-button'} onclick={onClick} {cssProps}>
		<slot />
	</El>
</El>
