<script lang="ts">
	import { El } from '../el'
	import Radio from './Radio.svelte'
	import type { RadioGroupProps } from './Radio.types'

	type $$Props = RadioGroupProps

	export let color: $$Props['color'] = undefined
	export let componentName: $$Props['componentName'] = 'radio-group'
	export let inline: $$Props['inline'] = undefined
	export let items: $$Props['items'] = undefined
	export let reverse: $$Props['reverse'] = undefined
	export let value: $$Props['value'] = undefined
	export let key: $$Props['key'] = undefined

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

	const onChange = (event: any) => {
		if (key) {
			value = items && items.filter((x) => x[key].toString() === event.target.value)?.[0]
		} else {
			const selectedIndex = event.target.value
			value = items && selectedIndex ? items[selectedIndex] : undefined
		}
	}
</script>

<El {componentName} bind:element {...$$restProps}>
	{#if items}
		{#each items as item, index (key ? item[key] : index)}
			<Radio
				{...props}
				value={key ? item[key] : index}
				checked={value === item}
				on:change={onChange}
				on:change>
				<slot {index} {item}>{item}</slot>
			</Radio>
		{/each}
	{:else}
		<slot />
	{/if}
</El>
