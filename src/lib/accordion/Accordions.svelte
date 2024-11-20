<script lang="ts">
	import { setContext } from 'svelte'
	import { writable } from 'svelte/store'
	import { El } from '../el'
	import type { AccordionsProps } from './Accordion.types'

	type $$Props = AccordionsProps

	let { componentName = 'accordions', persistent = false, ...restProps }: $$Props = $props()

	setContext('ACCORDIONS', writable({ persistent, children: [] }))

	let props: AccordionsProps = $derived({
		...restProps,
		componentName,
	})
</script>

<El {...props}>
	<slot />
</El>
