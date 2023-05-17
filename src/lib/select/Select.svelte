<script lang="ts">
	import { get_current_component } from 'svelte/internal'
	import { El } from '../el'
	import type { SelectProps } from './Select.types'

	type $$Props = SelectProps

	interface $$Slots {
		default: { index?: number; item?: any }
	}

	export let componentName: $$Props['componentName'] = 'select'
	export let items: $$Props['items'] = []
	export let value: $$Props['value'] = undefined
	export let key: $$Props['key'] = undefined
	export let name: $$Props['name'] = undefined
	export let size: $$Props['size'] = undefined
	export let disabled: $$Props['disabled'] = undefined
	export let placeholder: $$Props['placeholder'] = undefined
	export let state: $$Props['state'] = undefined

	const components = [get_current_component(), ...($$props.components ?? [])]

	let cssProps: $$Props = {}
	let props: $$Props = {}

	$: {
		cssProps = { size, state }

		props = {
			componentName,
			value,
			disabled,
			placeholder,
			name,
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

<El
	tag="select"
	{components}
	bind:value
	{...$$restProps}
	{...props}
	{cssProps}
	on:change={onChange}>
	{#if items}
		{#if value == undefined}
			<option disabled selected>{placeholder ? placeholder : ''}</option>
		{/if}
		{#each items as item, index}
			<option value={index} selected={value === getKey(item)}>
				<slot {index} {item}>{item}</slot>
			</option>
		{/each}
	{:else}
		<slot />
	{/if}
</El>
