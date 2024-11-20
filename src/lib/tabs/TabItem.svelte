<script lang="ts">
	import { getContext, onMount, onDestroy } from 'svelte'
	import { El } from '../el'
	import type { TabItemProps, TabsContext } from './Tab.types'
	import { TABS } from './Tabs.svelte'

	type $$Props = TabItemProps

	let {
		componentName = 'tab-item',
		tag = 'li',
		active,
		disabled,
		children,
		...restProps
	}: $$Props = $props()

	const tab = $state({ active })
	const { registerTab, selectTab, removeTab, selectedTab } = getContext<TabsContext>(TABS)

	let element: HTMLElement

	onMount(() => {
		registerTab(tab)
	})

	onDestroy(() => {
		removeTab(tab)
	})

	$effect(() => {
		if (active) selectTab(tab)
	})

	let icon = $derived(!(element?.textContent ?? true))

	let cssProps: any = $derived({
		disabled,
		icon,
		active: $selectedTab === tab,
	})
</script>

<El {...restProps} {tag} {componentName} onclick={() => (!disabled ? selectTab(tab) : null)}>
	<El bind:element tag="button" componentName="{componentName}-link" {cssProps}>
		{#if children}
			{@render children()}
		{/if}
	</El>
</El>
