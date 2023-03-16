<script lang="ts">
	import { onDestroy, onMount } from 'svelte'
	import TomSelect from 'tom-select'
	import type { RecursivePartial, TomSettings } from 'tom-select/dist/types/types'
	import { El } from '../el'
	import { classname } from '../internal'
	import type { AutocompleteProps } from './Autocomplete.types'

	type $$Props = AutocompleteProps

	export let componentName: $$Props['componentName'] = 'autocomplete'
	export let disabled: $$Props['disabled'] = undefined
	export let items: $$Props['items'] = []
	export let key: $$Props['key'] = undefined
	export let placeholder: $$Props['placeholder'] = undefined
	export let size: $$Props['size'] = undefined
	export let state: $$Props['state'] = undefined
	export let name: $$Props['name'] = undefined
	export let value: $$Props['value'] = undefined

	let element: HTMLSelectElement
	let instance: TomSelect
	let loaded = false
	let props: $$Props
	let settings: Partial<TomSettings>
	$: {
		props = {
			componentName,
			disabled,
			placeholder,
			cssProps: { loaded, size, state },
		}

		settings = {
			dropdownClass: classname(componentName + '-dropdown'),
			optionClass: classname(componentName + '-option'),
			onChange(key) {
				value = items?.[key as any]
			},
			onInitialize() {
				loaded = true
			},
		} as Partial<TomSettings>

		disabled ? instance?.disable() : instance?.enable()

		instance && update('items', items)
		instance && update('value', value)
	}

	function getKey(item: any, fallback: any) {
		if (!key) return fallback

		if (typeof key == 'function') return key(item)

		const computed = typeof item === 'object' ? item[key] : item

		return `${typeof computed}:${computed}`
	}

	function bind() {
		if (!element) return
		instance = new TomSelect(element, settings as RecursivePartial<TomSettings>)
	}

	function unbind() {
		instance?.destroy()
	}

	function update(key: string, input: any) {
		if (key == 'items') {
			instance.clear(true)
			instance.clearOptions()
			requestAnimationFrame(() => instance.sync())
		}

		if (key == 'value') {
			const index = items?.findIndex((item) => item === value)
			instance.setValue(`${index || ''}`, true)
		}
	}

	onMount(bind)

	onDestroy(unbind)
</script>

<El tag="select" bind:element {name} {...$$restProps} {...props}>
	{#each items || [] as item, index (getKey(item, index))}
		<!-- DON'T USE 'El' INSTEAD OF 'option' -->
		<option value={index} selected={value === item}>
			<slot {index} {item}>{item}</slot>
		</option>
	{/each}
</El>
