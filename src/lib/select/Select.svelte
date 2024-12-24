<script lang="ts">
	import { El } from '../el'
	import type { SelectProps } from './Select.types'

	type $$Props = SelectProps

	let {
		componentName = 'select',
		items,
		key,
		id = $bindable(),
		name,
		size,
		disabled,
		multiple,
		placeholder,
		state,
		value = $bindable(),
		children,
		...restProps
	}: $$Props = $props()

	let getKey = $derived.by(() => {
		return (item: any) => {
			if (typeof item === 'object') {
				if (key) {
					return typeof key === 'string' ? item[key] : key(item)
				}
				return JSON.stringify(item)
			} else {
				return item
			}
		}
	})

	function parse(item: any) {
		if (typeof items[0] === 'object') {
			if (!key) {
				return JSON.parse(item)
			}
		}
		return item
	}

	const onchange = (event: any) => {
		if (multiple) {
			value = Array.from(event.target.selectedOptions).map((option: any) => parse(option.value))
		} else {
			const selected = event.target.value
			value = parse(selected)
		}
	}

	const isSelected = (item: any) => {
		if (multiple) {
			return value?.findIndex((x: any) => getKey(x) === getKey(item)) > -1
		}
		return value === getKey(item)
	}

	let props: $$Props = $derived({
		...restProps,
		tag: 'select',
		componentName,
		value,
		id,
		disabled,
		placeholder,
		name,
		onchange,
		multiple,
		cssProps: {
			size,
			state,
		},
	})
</script>

<El bind:value {...props}>
	{#if items}
		{#if value == undefined}
			<option disabled selected>{placeholder ? placeholder : ''}</option>
		{/if}
		{#each items as item, index}
			<option value={getKey(item)} selected={isSelected(item)}>
				{#if children}
					{@render children?.({ item, index })}
				{:else}
					{item}
				{/if}
			</option>
		{/each}
	{:else}
		{@render children?.()}
	{/if}
</El>
