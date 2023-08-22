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
	export let key: $$Props['key'] = undefined
	export let name: $$Props['name'] = undefined
	export let size: $$Props['size'] = undefined
	export let disabled: $$Props['disabled'] = undefined
	export let multiple: $$Props['multiple'] = undefined
	export let placeholder: $$Props['placeholder'] = undefined
	export let state: $$Props['state'] = undefined
	export let value: $$Props['value'] = multiple ? [] : undefined

	const components = [
		{ component: get_current_component(), except: [] },
		...($$props.components ?? []),
	]

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
		if (typeof items[0] === 'object') {
			if (!key) {
				return JSON.parse(item)
			}
		}
		return item
	}

	const onChange = (event: any) => {
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
</script>

<El
	tag="select"
	{components}
	{multiple}
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
			<option value={getKey(item)} selected={isSelected(item)}>
				<slot {index} {item}>{item}</slot>
			</option>
		{/each}
	{:else}
		<slot />
	{/if}
</El>
