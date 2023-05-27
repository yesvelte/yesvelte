<script lang="ts">
	import { get_current_component } from 'svelte/internal'
	import { getContext } from 'svelte'
	import { El } from '../el'
	import type { TabItemProps, TabsContext } from './Tab.types'
	import { TABS } from './Tabs.svelte'

	type $$Props = TabItemProps

	export let componentName: $$Props['componentName'] = 'tab-item'
	export let tag: $$Props['tag'] = 'li'
	export let active: $$Props['active'] = undefined
	export let disabled: $$Props['disabled'] = undefined
	const components = [
		{ component: get_current_component(), except: [] },
		...($$props.components ?? []),
	]

	const tab = {}
	const { registerTab, selectTab, selectedTab } = getContext<TabsContext>(TABS)

	let element: HTMLElement

	registerTab(tab)

	$: active ? selectTab(tab) : null
	$: icon = !(element?.textContent ?? true)

	let cssProps: any = {}
	$: {
		cssProps = {
			disabled,
			icon,
			active: $selectedTab === tab,
		}
	}
</script>

<El
	{components}
	{...$$restProps}
	{tag}
	{componentName}
	on:click={() => (!disabled ? selectTab(tab) : null)}>
	<El bind:element tag="button" componentName="{componentName}-link" {cssProps}>
		<slot />
	</El>
</El>
