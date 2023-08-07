<script lang="ts">
	import { get_current_component } from 'svelte/internal'
	import { El } from '../el'
	import Radio from './Radio.svelte'
	import type { RadioGroupProps } from './Radio.types'

	type $$Props = RadioGroupProps

	interface $$Slots {
		default: { index?: number; item?: any }
	}

	export let color: $$Props['color'] = undefined
	export let componentName: $$Props['componentName'] = 'radio-group'
	export let inline: $$Props['inline'] = undefined
	export let items: $$Props['items'] = undefined
	export let reverse: $$Props['reverse'] = undefined
	export let key: $$Props['key'] = undefined
	export let value: $$Props['value'] = undefined
	export let name: $$Props['name'] = undefined

	const components = [
		{ component: get_current_component(), except: [] },
		...($$props.components ?? []),
	]

	let element: HTMLElement
	let props: $$Props = {}

	$: {
		props = {
			inline,
			reverse,
			name: name ?? element?.id,
			color,
		}
	}

	$: getKey = (item: any) => {
		if (key && typeof item === 'object') {
			return typeof key === 'string' ? JSON.stringify(item[key]) : JSON.stringify(key(item))
		} else {
			return JSON.stringify(item)
		}
	}

	const onChange = (event: any) => {
		value = JSON.parse(event.target.value)
	}
</script>

<El {componentName} {components} bind:element {...$$restProps}>
	{#if items}
		{#each items as item, index (index)}
			<Radio
				{...props}
				value={getKey(item)}
				checked={getKey(value) === getKey(item)}
				on:change={onChange}
				on:change>
				<slot {index} {item}>{item}</slot>
			</Radio>
		{/each}
	{:else}
		<slot />
	{/if}
</El>
