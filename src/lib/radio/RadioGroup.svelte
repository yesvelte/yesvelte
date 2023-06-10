<!-- @css:radio-group -->
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
			name: element?.id,
			color,
		}
	}

	$: getKey = (item: any) => {
		if (key) {
			return typeof key === 'string' ? item[key] : key(item)
		} else {
			return item
		}
	}

	const onChange = (event: any) => {
		const selectedIndex = event.target.value
		value = items && selectedIndex ? getKey(items[selectedIndex]) : undefined
	}
</script>

<El {componentName} {components} bind:element {...$$restProps}>
	{#if items}
		{#each items as item, index (index)}
			<Radio
				{...props}
				value={index}
				checked={value === getKey(item)}
				on:change={onChange}
				on:change>
				<slot {index} {item}>{item}</slot>
			</Radio>
		{/each}
	{:else}
		<slot />
	{/if}
</El>
