<script lang="ts">
	import { getContext, onMount } from 'svelte'
	import { El } from '../el'
	import type { StepItemProps } from './Steps.types'

	type $$Props = StepItemProps

	export let componentName: $$Props['componentName'] = 'step-item'
	export let href: $$Props['href'] = undefined
	export let active: $$Props['active'] = undefined

	let index: number = 0

	let cssProps: object = {}
	let props: $$Props = {}

	const { register, unregister, active: activeIndex } = getContext<any>('STEPS')

	onMount(() => {
		index = register({ active })

		return () => {
			unregister(index)
		}
	})

	$: {
		cssProps = {
			active,
		}
		props = {
			tag: href ? 'a' : 'span',
			componentName,
			href,
			beforeActive: $activeIndex > index,
			afterActive: $activeIndex < index,
			active: $activeIndex === index,
		}
	}
</script>

<El {...$$restProps} {cssProps} {...props} on:click>
	(active: {props.active})
	<slot />
</El>
