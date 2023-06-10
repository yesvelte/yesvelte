<!-- @css:accordion -->

<script lang="ts">
	import { getContext } from 'svelte'
	import { El, type ElProps } from '../el'
	import type { AccordionContext } from './Accordion.types'

	import { get_current_component } from 'svelte/internal'
	const components = [
		{ component: get_current_component(), except: [] },
		...($$props.components ?? []),
	]

	type $$Props = ElProps

	export let componentName: $$Props['componentName'] = 'accordion-body'

	let ctx = getContext<AccordionContext>('ACCORDION')

	let props: ElProps = {}
	$: props = {
		componentName,
	}

	$: show = $ctx.open
</script>

<El {components} {...$$restProps} {...props} {show}>
	<El componentName="{componentName}-inner">
		<slot />
	</El>
</El>
