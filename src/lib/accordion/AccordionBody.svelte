<script lang="ts">
	import Transition from '$lib/transition/Transition.svelte'
	import { getContext } from 'svelte'
	import { El, type ElProps } from '../el'
	import type { AccordionContext } from './Accordion.types'

	type $$Props = ElProps

	let element: HTMLDivElement
	let height: number | undefined = undefined

	$: if (element) {
		if (height) {
			element.style.height = height + 'px'
		} else {
			element.style.removeProperty('height')
		}
	}

	function onEntered() {
		height = undefined
	}
	function onEntering() {
		height = element.scrollHeight
	}
	function onLeaved() {
		height = undefined
	}
	function onLeaving() {
		height = element.scrollHeight
		setTimeout(() => {
			height = undefined
		}, 0)
	}

	export let componentName: $$Props['componentName'] = 'accordion-body'

	let ctx = getContext<AccordionContext>('ACCORDION')
</script>

<Transition
	bind:element
	on:entered={onEntered}
	on:entering={onEntering}
	on:leaved={onLeaved}
	on:leaving={onLeaving}
	componentName="{componentName}-transition"
	show={$ctx.open}>
	<El {...$$restProps} {componentName}>
		<slot />
	</El>
</Transition>
