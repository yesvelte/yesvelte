<script lang="ts">
	import fuzzy from 'fuzzy'
	import { El } from '../el'
	import { Popup } from '../popup'
	import { classname } from '../internal'
	import type { AutocompleteProps } from './Autocomplete.types'
	import { Icon } from '../icon'
	import { on } from 'svelte/events'

	type $$Props = AutocompleteProps

	let {
		componentName = 'autocomplete',
		items = [],
		placeholder,
		state: formState,
		size,
		key,
		id = $bindable(),
		create,
		dismissible,
		disabled,
		multiple,
		readonly,
		value = $bindable(),
		name,
		children,
		oncreated,
		oninput,
		onchanged,
		selectedSnippet,
		...restProps
	}: $$Props = $props()

	let inputEl: HTMLElement | undefined = $state(undefined)
	let query = $state('')
	let show = $state(false)
	let timer: any
	let cursorPosition = $state(0)

	function getKey(item: any) {
		if (typeof item === 'object') {
			if (key) {
				return typeof key === 'string' ? item[key] : key(item)
			}
		}
		return item
	}

	function onInput(e: any) {
		if (!show) show = true
		restProps.oninput?.(query)
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

		restProps?.onkeydown?.(e)
	}

	$effect(() => {
		cursorPosition = multiple ? value?.length - 1 : 0
	})

	function onCreate() {
		oncreated?.(query)
		query = ''
		show = false
	}

	function onFocus(e) {
		if (readonly) return
		if (disabled) return

		if (!show)
			timer = setTimeout(() => {
				show = true
			}, 200)

		restProps.onfocus?.(e)
	}

	function onSelect(item: any) {
		if (readonly) return
		query = ''
		inputEl?.focus()

		if (multiple) {
			if (value.includes(item)) {
				value = value.filter((x: any) => getKey(x) !== getKey(item))
			} else {
				value = [...(value ?? []), getKey(item)]
			}

			onchanged?.(value)
			setTimeout(() => {
				show = true
			})

			// continue
		} else {
			value = getKey(item)
			show = false
			onchanged?.(value)
		}
	}

	function onBlur(e) {
		timer = setTimeout(() => {
			show = false
		}, 200)
		restProps.onblur?.(e)
	}

	function onClick(e) {
		if (readonly) return
		if (disabled) return

		if (timer) {
			timer = clearTimeout(timer)
		}

		show = !show
		if (show) inputEl?.focus()
		restProps?.onclick?.(e)
	}

	function onRemove(item: any) {
		if (multiple) {
			value = value.filter((x) => getKey(x) !== getKey(item))
		} else {
			value = undefined
		}
	}

	let options = $derived(
		fuzzy
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
	)

	function isSelected(item) {
		if (multiple) {
			if (value && Array.isArray(value)) {
				return value.find((x) => getKey(x) === getKey(item))
			} else {
				return false
			}
		} else {
			return getKey(value) === getKey(item)
		}
	}

	let noResult: boolean = $derived(options.length === 0)

	let cssProps: AutocompleteProps = $derived({
		state: formState,
		size,
		disabled,
	})

	let props: AutocompleteProps = $derived({
		...restProps,
		componentName,
		id,
		cssProps,
		disabled,
		onclick: onClick,
		onfocus: onFocus,
	})
</script>

<El {...props}>
	{#if Array.isArray(value)}
		{#each value as val, index}
			{@const item = items.find((x) => getKey(x) === getKey(val))}
			{#if item}
				<El
					componentName="{componentName}-item"
					cssProps={{ multiple: true, active: cursorPosition === index }}>
					{#if selectedSnippet}
						{@render selectedSnippet({ item, index })}
					{:else if children}
						{@render children({ item, index })}
					{:else}
						{item}
					{/if}

					{#if dismissible}
						<El componentName="{componentName}-item-remove" onclick={() => onRemove(item)}>
							<Icon name="x" />
						</El>
					{/if}
				</El>
			{/if}
		{/each}
	{:else}
		{@const index = items.findIndex((x) => getKey(x) == getKey(value))}
		{#if index > -1}
			{@const item = items[index]}
			{#if item}
				<El componentName="{componentName}-item">
					{#if selectedSnippet}
						{@render selectedSnippet({ item, index })}
					{:else if children}
						{@render children({ item, index })}
					{:else}
						{item}
					{/if}
				</El>
			{/if}
		{/if}
	{/if}
	<input
		class={classname(`${componentName}-input`)}
		bind:this={inputEl}
		placeholder={value ? undefined : placeholder}
		{disabled}
		{readonly}
		bind:value={query}
		onblur={onBlur}
		onfocus={onFocus}
		onkeydown={onKeyDown}
		oninput={onInput} />
	<Popup autoClose="outside" bind:show componentName="{componentName}-dropdown">
		{#if noResult}
			{#if create}
				<El
					onclick={() => onCreate()}
					componentName="{componentName}-option"
					cssProps={{ create: true }}>
					Create {query}...
				</El>
			{:else}
				<El componentName="{componentName}-option" cssProps={{ noResult: true }}>No result</El>
			{/if}
		{/if}

		{#each options as item, index}
			{@const shouldShow = !isSelected(item)}
			{#if shouldShow}
				<El onclick={() => onSelect(item)} componentName="{componentName}-option">
					{#if children}
						{@render children({ item, index })}
					{:else}
						{item}
					{/if}
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
					<option value={val} selected>{val}</option>
				{/each}
			</select>
		{/if}
	{:else}
		<input type="hidden" {name} bind:value />
	{/if}
{/if}
