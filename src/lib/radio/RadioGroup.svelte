<script lang="ts">
	import { El } from '../el'
	import Radio from './Radio.svelte'
	import type { RadioGroupProps } from './Radio.types'

	type $$Props = RadioGroupProps

	interface $$Slots {
		default: { index?: number; item?: any }
	}

	let {
		color,
		componentName = 'radio-group',
		inline,
		items,
		reverse,
		key,
		value = $bindable(),
		name,
		children,
		...restProps
	}: $$Props = $props()

	let element: HTMLElement | undefined = $state(undefined)

	let getKey = (item: any) => {
		if (typeof item === 'object') {
			if (key) {
				return typeof key === 'string' ? item[key] : key(item)
			}
			return JSON.stringify(item)
		}

		return item
	}

	function parse(item: any) {
		if (typeof items[0] === 'object' && !key) {
			return JSON.parse(item)
		}
		return item
	}

	const onchange = (event: any) => {
		value = parse(event.target.value)
	}

	let props: $$Props = $derived({
		inline,
		reverse,
		onchange,
		name: name ?? element?.id,
		color,
	})
</script>

<El {componentName} bind:element {...restProps}>
	{#if items}
		{#each items as item, index (index)}
			<Radio {...props} value={getKey(item)} checked={getKey(value) === getKey(item)}>
				{#if children}
					{@render children({ index, item })}
				{:else}
					{item}
				{/if}
			</Radio>
		{/each}
	{:else}
		{@render children?.()}
	{/if}
</El>
