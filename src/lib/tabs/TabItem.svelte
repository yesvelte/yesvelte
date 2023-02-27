<script lang="ts">
	import { getContext } from 'svelte'
	import { El } from '../el'
	import type { TabItemProps, TabsContext } from './Tab.types'
	import { TABS } from './Tabs.svelte'

	type $$Props = TabItemProps

	export let componentName: $$Props['componentName'] = 'tab-item'
	export let tag: $$Props['tag'] = 'li'
	export let icon: $$Props['icon'] = undefined;
	export let active: $$Props['active'] = undefined
	export let disabled: $$Props['disabled'] = undefined

	const tab = {}
	const { registerTab, selectTab, selectedTab } = getContext<TabsContext>(TABS)

	registerTab(tab)

	$: active ? selectTab(tab) : null

	let cssProps: TabItemProps = {}
	$: {
		cssProps = {
			disabled,
			icon,
			active: $selectedTab === tab,
		}
	}
</script>

<El {...$$restProps} {tag} {componentName} on:click={() => (!disabled ? selectTab(tab) : null)}>
	<El tag="button" componentName="{componentName}-link" {cssProps}>
		<slot />
	</El>
</El>
