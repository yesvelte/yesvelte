<!-- @css:steps -->
<script lang="ts">
	import { El } from '../el'
	import { get_current_component } from 'svelte/internal'
	import type { StepsProps } from './Steps.types'
	import { setContext } from 'svelte'
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
	export let active: number = 0

	const components = [
		{ component: get_current_component(), except: [] },
		...($$props.components ?? []),
	]

	let element: HTMLElement

	let stepComponents: number[] = []

	const activeStore = writable(active)

	$: cssProps = {
		color,
		vertical,
		counter,
	}

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

	$: activeStore.set(active)

	setContext('STEPS', { register, unregister, active: activeStore })
</script>

<El {components} {componentName} bind:element {...$$restProps} {cssProps}>
	{#if items}
		{#each items as item, index}
			<slot {item} {index} />
		{/each}
	{:else}
		<slot />
	{/if}
</El>
