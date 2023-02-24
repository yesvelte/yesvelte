<script lang="ts">
	import { getContext, onDestroy, onMount, tick } from 'svelte'
	import { El, type ElProps } from '../el'
	import type { AccordionContext } from './Accordion.types'

	type $$Props = ElProps

	export let componentName: $$Props['componentName'] = 'accordion-body'

	let ctx = getContext<AccordionContext>('ACCORDION')

	let element: any
	let collapsing = false
	let open = $ctx.open
	let height: number | undefined = undefined

	function onOpenChanged(newOpen: boolean) {
		open = true
		collapsing = true
		height = element.scrollHeight

		setTimeout(() => {
			if (newOpen) {
				height = element.scrollHeight
			} else {
				height = 0
			}
		}, 0)
	}

	function onTransitionEnd() {
		open = $ctx.open
		collapsing = false
		height = undefined
	}

	onMount(() => {
		if (element) element.addEventListener('transitionend', onTransitionEnd)
	})

	onDestroy(() => {
		if (element) element.removeEventListener('transitionend', onTransitionEnd)
	})

	$: if (element) onOpenChanged($ctx.open ?? false)

	let wrapperProps: ElProps = {}
	$: wrapperProps = {
		componentName: componentName + '-wrapper',
	}

	let wrapperCssProps: any
	$: wrapperCssProps = {
		open,
		collapsing,
	}

	$: style = height ? `height: ${height}px` : ''
</script>

<El bind:element {...$$restProps} {...wrapperProps} cssProps={wrapperCssProps} {style}>
	<El {componentName}>
		<slot />
	</El>
</El>
