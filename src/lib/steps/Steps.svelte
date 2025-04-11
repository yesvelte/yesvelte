<script lang="ts">
	import { El } from '../el'

	import type { StepsProps } from './Steps.types'
	import { setContext } from 'svelte'
	import { writable } from 'svelte/store'

	type $$Props = StepsProps

	let {
		color,
		componentName = 'steps',
		vertical,
		items,
		counter,
		active = $bindable(0),
		children,
		...restProps
	}: $$Props = $props()

	let element: HTMLElement | undefined = $state(undefined)

	let stepComponents: number[] = $state([])

	const activeStore = writable(active)

	function register(props: any) {
		const index = stepComponents.length
		stepComponents = [...stepComponents, index]
		if (props.active) {
			active = index
		}
		return index
	}

	function unregister(idx: number) {
		stepComponents = stepComponents.filter((comp, index) => index !== idx)
	}

	$effect(() => {
		activeStore.set(active)
	})

	setContext('STEPS', { register, unregister, active: activeStore })

	let props: $$Props = $derived({
		...restProps,
		componentName,
		cssProps: {
			color,
			vertical,
			counter,
		},
	})
</script>

<El bind:element {...props}>
	{#if items}
		{#each items as item, index}
			{@render children?.({ item, index })}
		{/each}
	{:else}
		{@render children?.()}
	{/if}
</El>
