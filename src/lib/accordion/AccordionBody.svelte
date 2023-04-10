<script lang="ts">
	import { getContext } from 'svelte'
	import { El, type ElProps } from '../el'
	import type { AccordionContext } from './Accordion.types'

	type $$Props = ElProps

	export let componentName: $$Props['componentName'] = 'accordion-body'

	let ctx = getContext<AccordionContext>('ACCORDION')

	let props: ElProps = {}
	$: props = {
		componentName,
	}

	$: show = $ctx.open
</script>

<El {...$$restProps} {...props} {show} showConfig="height">
	<div>
		<slot />
	</div>
</El>
