<script lang="ts">
	import { El } from '../el'
	import type { StepsProps } from './Steps.types'
	import { setContext, type SvelteComponent } from 'svelte'
	import { writable } from 'svelte/store'

	type $$Props = StepsProps

	interface $$Slots {
		default: { index?: number; item?: any }
	}

	export let color: $$Props['color'] = undefined
	export let componentName: $$Props['componentName'] = 'steps'
	export let vertical: $$Props['vertical'] = undefined
	export let items: $$Props['items'] = undefined
	export let counter: $$Props['counter'] = undefined
	export let activeIndex: number = 0

	let element: HTMLElement

	let components: number[] = []

	const active = writable(activeIndex)

	$: cssProps = {
		color,
		vertical,
		counter,
	}

	function register(props: any) {
		const index = components.length
		components = [...components, index]
		if (props.active) {
			activeIndex = index
		}
		return index
	}

	function unregister(idx: number) {
		components = components.filter((comp, index) => index !== idx)
	}

	$: active.set(activeIndex)

	setContext('STEPS', { register, unregister, active })
</script>

<El {componentName} bind:element {...$$restProps} {cssProps}>
	{#if items}
		{#each items as item, index}
			<slot {item} {index} />
		{/each}
	{:else}
		<slot />
	{/if}
</El>
