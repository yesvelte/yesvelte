<script lang="ts">
	import { El } from '../el'
	import type { CheckboxGroupProps } from './Checkbox.types'
	import Checkbox from './Checkbox.svelte'

	type $$Props = CheckboxGroupProps

	interface $$Slots {
		default: { index?: number; item?: any }
	}

	let {
		color,
		componentName = 'checkbox-group',
		inline,
		items,
		name,
		reverse,
		value = $bindable(),
		key,
		children,
		...restProps
	}: $$Props = $props()

	let element: HTMLElement | undefined = $state(undefined)

	function getKey(item: any) {
		if (typeof item === 'object') {
			if (key) {
				return typeof key === 'string' ? item[key] : key(item)
			}
			return JSON.stringify(item)
		} else {
			return item
		}
	}

	function parse(item: any) {
		if (typeof items?.[0] === 'object' && !key) {
			return JSON.parse(item)
		}
		return item
	}

	function onchange(event: any) {
		restProps.onchange?.(event)
		if (value === undefined) value = []

		if (items != undefined && items?.length > 0) {
			const selectedValue = parse(event.target?.value)
			const selectedChecked = event.target?.checked

			if (selectedChecked) {
				value.push(selectedValue)
			} else {
				var _index = value.findIndex((x) => getKey(x) === getKey(selectedValue))
				if (_index !== -1) {
					value.splice(_index, 1)
				}
			}
			value = value
		}
	}

	function isSelected(item: any) {
		return (value?.findIndex((x) => getKey(x) === getKey(item)) ?? -1) > -1
	}

	let props: $$Props = $derived({
		inline,
		name: name ?? element?.id,
		color,
		reverse,
		onchange,
	})
</script>

<El {...restProps} {componentName} bind:element>
	{#if items}
		{#each items as item, index (index)}
			<Checkbox {...props} value={getKey(item)} checked={isSelected(item)}>
				{#if children}
					{@render children?.({ index, item })}
				{:else}
					{item}
				{/if}
			</Checkbox>
		{/each}
	{:else}
		{@render children?.()}
	{/if}
</El>
