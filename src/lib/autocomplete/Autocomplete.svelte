<script lang="ts">
	import { get_current_component } from 'svelte/internal'
	import { createEventDispatcher } from 'svelte'
	import fuzzy from 'fuzzy'

	import { El } from '../el'
	import { Popup } from '../popup'
	import { classname } from '../internal'
	import type { AutocompleteProps } from './Autocomplete.types'
	import { Icon } from '../icon'

	type $$Props = AutocompleteProps

	export let componentName: string = 'autocomplete'
	export let items: NonNullable<$$Props['items']> = []
	export let placeholder: $$Props['placeholder'] = undefined
	export let state: $$Props['state'] = undefined
	export let size: $$Props['size'] = undefined
	export let _slots: $$Props['_slots'] = $$slots
	export let key: $$Props['key'] = undefined
	export let create: $$Props['create'] = undefined
	export let dismissible: $$Props['dismissible'] = undefined
	export let disabled: $$Props['disabled'] = undefined
	export let multiple: $$Props['multiple'] = undefined
	export let readonly: $$Props['readonly'] = undefined
	export let value: $$Props['value'] = multiple ? [] : undefined
	export let name: $$Props['name'] = undefined

	const dispatch = createEventDispatcher()
	const components = [
		{ component: get_current_component(), except: ['input', 'changed', 'created'] },
		...($$props.components ?? []),
	]

	$: getKey = (item: any) => {
		if (typeof item === 'object') {
			if (key) {
				return typeof key === 'string' ? item[key] : key(item)
			} else {
				return item
			}
		} else {
			return item
		}
	}

	let inputEl: HTMLElement
	let query = ''
	let show = false
	let noResult = false
	let timer: any
	let cursorPosition = 0

	function onInput(e: any) {
		if (!show) show = true
		dispatch('input', query)
	}

	function onKeyDown(e) {
		if (readonly) return

		if (e.key === 'Backspace') {
			if (query.length === 0) {
				if (multiple) {
					let currentPosition = cursorPosition
					value = value.filter((x, index) => index !== cursorPosition)

					cursorPosition = Math.min(currentPosition, value.length - 1)
				} else {
					value = undefined
				}
			}
		}

		if (e.key == 'ArrowLeft') {
			cursorPosition = Math.max(0, cursorPosition - 1)
		} else if (e.key === 'ArrowRight') {
			cursorPosition = Math.min(cursorPosition + 1, value.length - 1)
		}

		if (e.key == 'Enter') {
			if (create && options.length === 0) {
				onCreate()
			}
		}
	}

	$: cursorPosition = multiple ? value?.length - 1 : 0

	function onCreate() {
		dispatch('created', query)
		query = ''
		show = false
	}

	function onFocus() {
		if (readonly) return
		if (disabled) return

		if (!show)
			timer = setTimeout(() => {
				show = true
			}, 200)
	}

	function onSelect(item: any) {
		if (readonly) return
		query = ''
		inputEl.focus()

		if (multiple) {
			if (value.includes(item)) {
				value = value.filter((x) => x !== item)
			} else {
				value = [...(value ?? []), getKey(item)]
			}

			dispatch('changed', value)
			clearTimeout(timer) // prevent close when selected

			// continue
		} else {
			value = getKey(item)
			show = false
			dispatch('changed', value)
		}
	}

	function onBlur(e) {
		timer = setTimeout(() => {
			show = false
		}, 200)
	}

	function onClick() {
		if (readonly) return
		if (disabled) return

		if (timer) {
			timer = clearTimeout(timer)
		}

		show = !show
		if (show) inputEl.focus()
	}

	function onRemove(item: any) {
		if (multiple) {
			value = value.filter((x) => x !== getKey(item))
		} else {
			value = undefined
		}
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

	$: noResult = options.length === 0
</script>

<El {components} componentName="{componentName}-wrapper">
	<El {...$$restProps} {componentName} {cssProps} {disabled} on:click={onClick} on:focus={onFocus}>
		{#if Array.isArray(value)}
			{#each value as val, index}
				{@const item = items.find((x) => getKey(x) == val)}
				{#if item}
					<El
						componentName="{componentName}-item"
						cssProps={{ multiple: true, active: cursorPosition === index }}>
						{#if _slots['selected']}
							<slot name="selected" {item} {index}>{item}</slot>
						{:else}
							<slot {item} {index}>{item}</slot>
						{/if}
						{#if dismissible}
							<El componentName="{componentName}-item-remove" on:click={() => onRemove(item)}>
								<Icon name="x" />
							</El>
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
			on:click
			on:keydown={onKeyDown}
			on:input={onInput} />
	</El>
	<Popup autoClose="outside" bind:show componentName="{componentName}-dropdown">
		{#if noResult}
			{#if create}
				<El
					on:click={() => onCreate()}
					componentName="{componentName}-option"
					cssProps={{ create: true }}>
					Create {query}...
				</El>
			{:else}
				<El componentName="{componentName}-option" cssProps={{ noResult: true }}>No result</El>
			{/if}
		{/if}

		{#each options as item, index}
			{@const shouldShow = multiple ? !value?.includes(getKey(item)) : value !== getKey(item)}
			{#if shouldShow}
				<El on:click={() => onSelect(item)} componentName="{componentName}-option">
					<slot {item} {index}>{item}</slot>
				</El>
			{/if}
		{/each}
	</Popup>
</El>

{#if name}
	{#if multiple}
		{#if value}
			<select style="display: none" multiple {name}>
				{#each value as val}
					<option value={val} selected />
				{/each}
			</select>
		{/if}
	{:else}
		<input type="hidden" {name} bind:value />
	{/if}
{/if}
