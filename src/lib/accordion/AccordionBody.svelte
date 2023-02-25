<script lang="ts">
	import Transition from '$lib/transition/Transition.svelte'
	import { getContext, onDestroy, onMount, tick } from 'svelte'
	import { El, type ElProps } from '../el'
	import type { AccordionContext } from './Accordion.types'

	type $$Props = ElProps

	export let componentName: $$Props['componentName'] = 'accordion-body'

	let ctx = getContext<AccordionContext>('ACCORDION')
</script>

<Transition componentName="{componentName}-transition" show={$ctx.open}>
	<El {...$$restProps} {componentName}>
		<slot />
	</El>
</Transition>
