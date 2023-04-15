<script lang="ts">
	import { getContext, get_current_component, onDestroy, onMount } from 'svelte/internal'
	import { El } from '../el'
	import type { StepItemProps } from './Steps.types'

	type $$Props = StepItemProps

	export let componentName: $$Props['componentName'] = 'step-item'
	export let href: $$Props['href'] = undefined
	export let active: $$Props['active'] = undefined

	let cssProps: object = {}
	let props: $$Props = {}
	$: {
		cssProps = {
			active,
		}
		props = {
			tag: href ? 'a' : 'span',
			componentName,
			href,
		}
	}
	const { register, unregister } = getContext<any>('STEPS')

	const component = get_current_component()

	onMount(() => {
		register(component, $$props)
	})

	onDestroy(() => {
		unregister(component)
	})
</script>

<El {...$$restProps} {cssProps} {...props} on:click>
	(active: {active})
	<slot />
</El>
