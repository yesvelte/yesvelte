<script lang="ts">
	import { setContext } from 'svelte'
	import { writable } from 'svelte/store'
	import { El } from '../el'
	import type { AccordionsProps } from './Accordion.types'

	import { get_current_component } from 'svelte/internal'
	const components = [get_current_component(), ...($$props.components ?? [])]

	type $$Props = AccordionsProps

	export let componentName: $$Props['componentName'] = 'accordions'
	export let persistent: $$Props['persistent'] = false

	setContext('ACCORDIONS', writable({ persistent, children: [] }))

	let props: AccordionsProps = {}
	$: props = {
		componentName,
	}
</script>

<El {components} {...$$restProps} {...props}>
	<slot />
</El>
