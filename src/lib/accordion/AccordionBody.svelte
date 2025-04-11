<script lang="ts">
	import { getContext } from 'svelte'
	import { El, type ElProps } from '../el'
	import type { AccordionContext } from './Accordion.types'

	type $$Props = ElProps

	let {
		componentName = 'accordion-body',
		show = $bindable(),
		children,
		...restProps
	}: $$Props = $props()

	let ctx = getContext<AccordionContext>('ACCORDION')

	let props: ElProps = $derived({
		...restProps,
		componentName,
		show: $ctx.open,
	})
</script>

<El {...props}>
	<El componentName="{componentName}-inner">
		{@render children?.()}
	</El>
</El>
