<script lang="ts">
	import { get_current_component } from 'svelte/internal'
	import { getContext, onMount } from 'svelte'
	import { El } from '../el'
	import type { StepItemProps } from './Steps.types'

	type $$Props = StepItemProps

	export let componentName: $$Props['componentName'] = 'step-item'
	export let href: $$Props['href'] = undefined
	export let active: $$Props['active'] = undefined
	export let color: $$Props['color'] = undefined

	let index: number = 0

	let cssProps: object = {}
	let props: $$Props = {}

	const components = [get_current_component(), ...($$props.components ?? [])]

	const { register, unregister, active: activeIndex } = getContext<any>('STEPS')

	onMount(() => {
		index = register({ active })

		return () => {
			unregister(index)
		}
	})

	$: if (active) $activeIndex = index

	$: {
		cssProps = {
			beforeActive: $activeIndex > index,
			afterActive: $activeIndex < index,
			active: $activeIndex === index,
			color,
		}
		props = {
			tag: href ? 'a' : 'span',
			componentName,
			href,
		}
	}
</script>

<El {components} {...$$restProps} {cssProps} {...props} on:click>
	<slot />
</El>
