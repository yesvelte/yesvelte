<script lang="ts">
	import { getContext, onMount } from 'svelte'
	import { El } from '../el'
	import type { StepItemProps } from './Steps.types'

	type $$Props = StepItemProps

	let {
		componentName = 'step-item',
		href,
		active,
		color,
		children,
		...restProps
	}: $$Props = $props()

	let index: number = $state(0)

	const { register, unregister, active: activeIndex } = getContext<any>('STEPS')

	onMount(() => {
		index = register({ active })

		return () => {
			unregister(index)
		}
	})

	$effect(() => {
		if (active) $activeIndex = index
	})

	let props: $$Props = $derived({
		...restProps,
		tag: href ? 'a' : 'span',
		componentName,
		href,
		cssProps: {
			beforeActive: $activeIndex > index,
			afterActive: $activeIndex < index,
			active: $activeIndex === index,
			color,
		},
	})
</script>

<El {...props}>
	{@render children?.()}
</El>
