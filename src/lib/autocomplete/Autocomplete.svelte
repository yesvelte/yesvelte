<script lang="ts">
	import { createEventDispatcher } from 'svelte'
	import fuzzy from 'fuzzy'

	import { El } from '../el'
	import { Popup } from '../popup'
	import { classname } from '../internal'
	import type { AutocompleteProps } from './Autocomplete.types'

	type $$Props = AutocompleteProps

	export let componentName: string = 'autocomplete'
	export let items: NonNullable<$$Props['items']> = []
	export let placeholder: $$Props['placeholder'] = undefined
	export let state: $$Props['state'] = undefined
	export let size: $$Props['size'] = undefined
	export let _slots: $$Props['_slots'] = $$slots
	export let key: $$Props['key'] = undefined
	export let disabled: $$Props['disabled'] = undefined
	export let readonly: $$Props['readonly'] = undefined
	export let value: $$Props['value'] = undefined

	const dispatch = createEventDispatcher()

	$: getKey = (item: any) => {
		if (key) {
			return typeof key === 'string' ? item[key] : key(item)
		} else {
			return item
		}
	}

	let inputEl: HTMLElement
	let query = ''
	let show = false
	let noResult = false

	function onInput(e: any) {
		dispatch('input', query)
	}

	function onKeyDown(e) {
		if (readonly) return

		if (e.key === 'Backspace') {
			// if(multiple) {
			// ....
			// } else {
			if (query.length === 0) {
				value = undefined
			}
			// }
		}
	}

	function onFocus() {
		if (readonly) return
		if (disabled) return

		show = true
	}

	function onSelect(item: any) {
		if (readonly) return
		query = ''
		value = getKey(item)
		inputEl.focus()
		// if (!multiple) {
		show = false
		// }

		dispatch('changed', value)
		// if(multiple) {
		//     ...
		// }
	}

	function onBlur() {
		setTimeout(() => {
			show = false
		}, 200)
	}

	function onClick() {
		if (!show) show = true
	}

	$: options = fuzzy
		.filter(
			query,
			items.filter((i) => value !== getKey(i)),
			{
				extract(input) {
					return JSON.stringify(getKey(input))
				},
			}
		)
		.map((item) => item.original)

	$: cssProps = {
		state,
		size,
		disabled,
	}

	$: if (show && inputEl) inputEl.focus()

	$: noResult = options.length === 0
</script>

<El componentName="{componentName}-wrapper">
	<El {...$$restProps} {componentName} {cssProps} {disabled} on:click={onClick} on:focus={onFocus}>
		{#if Array.isArray(value)}
			{#each value as val, index}
				{@const item = items.find((x) => getKey(x) == val)}
				{#if item}
					<El componentName="{componentName}-item">
						{#if _slots['selected']}
							<slot name="selected" {item} {index}>{item}</slot>
						{:else}
							<slot {item} {index}>{item}</slot>
						{/if}
					</El>
				{/if}
			{/each}
		{:else}
			{@const index = items.findIndex((x) => getKey(x) == value)}
			{@const item = items[index]}
			{#if item}
				<El componentName="{componentName}-item">
					{#if _slots['selected']}
						<slot name="selected" {item} {index}>{item}</slot>
					{:else}
						<slot {item} {index}>{item}</slot>
					{/if}
				</El>
			{/if}
		{/if}
		<input
			class={classname(`${componentName}-input`)}
			bind:this={inputEl}
			placeholder={value ? undefined : placeholder}
			{disabled}
			{readonly}
			bind:value={query}
			on:blur={onBlur}
			on:blur
			on:focus={onFocus}
			on:focus
			on:change
			on:click
			on:keydown={onKeyDown}
			on:input={onInput} 
			on:input />
	</El>
	<Popup autoClose="outside" bind:show componentName="{componentName}-dropdown">
		{#if noResult}
			<El componentName="{componentName}-option">No result</El>
		{/if}
		{#each options as item, index}
			<El on:click={() => onSelect(item)} componentName="{componentName}-option">
				<slot {item} {index}>{item}</slot>
			</El>
		{/each}
	</Popup>
</El>
