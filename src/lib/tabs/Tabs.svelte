<!-- @css:tabs -->
<script context="module">
	export const TABS = {}
</script>

<script lang="ts">
	import { get_current_component } from 'svelte/internal'
	import { onDestroy, setContext } from 'svelte'
	import { writable } from 'svelte/store'
	import { El } from '../el'
	import type { TabsContext, TabsProps } from './Tab.types'

	type $$Props = TabsProps

	export let componentName: $$Props['componentName'] = 'tabs'
	export let vertical: $$Props['vertical'] = undefined
	const components = [
		{ component: get_current_component(), except: [] },
		...($$props.components ?? []),
	]

	const tabs: Array<any> = []
	const panels: Array<any> = []
	const selectedTab = writable<any | null>(null)
	const selectedPanel = writable<any | null>(null)

	setContext<TabsContext>(TABS, {
		registerTab: (tab: any) => {
			tabs.push(tab)
			selectedTab.update((current) => current || tab)

			onDestroy(() => {
				const i = tabs.indexOf(tab)
				tabs.splice(i, 1)
				selectedTab.update((current) =>
					current === tab ? tabs[i] || tabs[tabs.length - 1] : current
				)
			})
		},

		registerPanel: (panel: any) => {
			panels.push(panel)
			selectedPanel.update((current) => current || panel)

			onDestroy(() => {
				const i = panels.indexOf(panel)
				panels.splice(i, 1)
				selectedPanel.update((current) =>
					current === panel ? panels[i] || panels[panels.length - 1] : current
				)
			})
		},

		selectTab: (tab: any) => {
			const i = tabs.indexOf(tab)
			selectedTab.set(tab)
			selectedPanel.set(panels[i])
		},

		selectedTab,
		selectedPanel,
	})

	let cssProps: TabsProps = {}
	$: {
		cssProps = { vertical }
	}
</script>

<El {components} {...$$restProps} {componentName} {cssProps}>
	<slot />
</El>
