<script lang="ts">
	import { El } from '../el'
	import type { StepsProps } from './Steps.types'
	import StepItem from './StepItem.svelte'
	import { setContext, type SvelteComponent } from 'svelte'

	type $$Props = StepsProps

	interface $$Slots {
		default: { index?: number; item?: any }
	}

	export let color: $$Props['color'] = undefined
	export let componentName: $$Props['componentName'] = 'checkbox-group'
	export let vertical: $$Props['vertical'] = undefined
	export let items: $$Props['items'] = undefined
	export let name: $$Props['name'] = undefined
	export let counter: $$Props['counter'] = undefined
	export let activeIndex: number = 0
	export let activeItem: any = undefined

	let element: HTMLElement
	let props: $$Props = {}

	let components: Array<{ this: SvelteComponent; props: any }> = []

	$: props = {
		name: name ?? element?.id,
		color,
		vertical,
		counter,
	}

	function register(component: SvelteComponent, props: any) {
		console.log('register', {component, props})
		if (props.active) {
			components.map((comp) => {
				comp.this.$$set({ active: props.active })
				// comp.props['active'] = true
			})
		}
		components = [...components, { this: component, props }]
	}

	function unregister(component: SvelteComponent) {
		components = components.filter((comp) => comp.this !== component)
	}

	setContext('STEPS', { register, unregister })
</script>

<El {componentName} bind:element {...$$restProps}>
	{#if items}
		{#each items as item, index}
			<slot {item} {index}>
				<!-- <StepItem {...components[index].props} /> -->
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
