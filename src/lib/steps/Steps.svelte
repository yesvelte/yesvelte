<script lang="ts">
	import { El } from '../el'
	import type { StepsProps } from './Steps.types'
	import StepItem from './StepItem.svelte'
	import { setContext, type SvelteComponent } from 'svelte'
	import { writable } from 'svelte/store'

	type $$Props = StepsProps

	interface $$Slots {
		default: { index?: number; item?: any }
	}

	export let color: $$Props['color'] = undefined
	export let componentName: $$Props['componentName'] = 'checkbox-group'
	export let vertical: $$Props['vertical'] = undefined
	export let items: $$Props['items'] = undefined
	export let counter: $$Props['counter'] = undefined
	export let activeIndex: number = 0

	let element: HTMLElement
	let props: $$Props = {}

	let components: Array<{ this: SvelteComponent; props: any }> = []

	const active = writable(activeIndex)

	$: props = {
		color,
		vertical,
		counter,
	}

	function register(component: SvelteComponent, props: any) {
		components = [...components, { this: component, props }]
		const index = components.length
		if (props.active) {
			activeIndex = component.length
		}
		return index
	}

	function unregister(component: SvelteComponent) {
		components = components.filter((comp) => comp.this !== component)
	}

	$: active.set(activeIndex)
	setContext('STEPS', { register, unregister, active })
</script>

<El {componentName} bind:element {...$$restProps}>
	{#if items}
		{#each items as item, index}
			<slot {item} {index}>
				<StepItem>
					<!--  -->
				</StepItem>
			</slot>
			<!-- <StepItem
				{...props}
				on:change={onChange}>
				<slot {index} {item}>{item}</slot>
			</StepItem> -->
		{/each}
	{:else}
		<slot />
	{/if}
</El>

<!-- <script lang="ts">
	import { El } from '../el'
	import type { StepsProps } from './Steps.types'

	type $$Props = StepsProps

	export let color: $$Props['color'] = undefined
	export let componentName: $$Props['componentName'] = 'steps'
	export let counter: $$Props['counter'] = undefined
	export let vertical: $$Props['vertical'] = undefined
	export let items: any[] = []
	

	let cssProps: object = {}
	let props: StepsProps = {}
	$: {
		cssProps = {
			color,
			counter,
			vertical,
		}
		props = {
			componentName,
		}
	}
</script>

<El {...$$restProps} {cssProps} {...props}>
	<slot />
</El> -->
