<script lang="ts">
	import { El } from '../el'
	import type { CheckboxGroupProps } from './Checkbox.types'
	import Checkbox from './Checkbox.svelte'

	type $$Props = CheckboxGroupProps

	type $$Slots = {
		default: {
			item: any,
			index: number
		}
	}

	export let color: $$Props['color'] = undefined
	export let componentName: $$Props['componentName'] = 'checkbox-group'
	export let inline: $$Props['inline'] = undefined
	export let items: $$Props['items'] = undefined
	export let reverse: $$Props['reverse'] = undefined
	export let value: $$Props['value'] = undefined

	let element: HTMLElement
	let props: $$Props = {}

	$: props = {
		inline,
		name: element?.id,
		color,
		reverse,
	}

	function onChange(event: any) {
		if (value === undefined) value = []

		if (items != undefined && items?.length > 0) {
			const selectedIndex = event.target?.value
			const selectedChecked = event.target?.checked
			if (selectedChecked) {
				value.push(items[selectedIndex])
			} else {
				var _index = value.indexOf(items[selectedIndex])
				if (_index !== -1) {
					value.splice(_index, 1)
				}
			}
			value = value
		}
	}
</script>

<El {componentName} bind:element {...$$restProps}>
	{#if items}
		{#each items as item, index (index)}
			<Checkbox {...props} value={index} checked={value?.includes(item)} on:change={onChange}>
				<slot {index} {item}>{item}</slot>
			</Checkbox>
		{/each}
	{:else}
		<slot item={undefined} index={0}/>
	{/if}
</El>
