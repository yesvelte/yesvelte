<script module>
	export const TABS = {}
</script>

<script lang="ts">
	import { setContext } from 'svelte'
	import { writable } from 'svelte/store'
	import { El } from '../el'
	import type { TabsContext, TabsProps } from './Tab.types'

	type $$Props = TabsProps

	let {
		activeIndex = $bindable(),
		componentName = 'tabs',
		vertical,
		children,
		...restProps
	}: $$Props = $props()

	const tabs: Array<any> = $state([])
	const panels: Array<any> = $state([])
	const selectedTab = writable<any | null>()
	const selectedPanel = writable<any | null>(null)

	setContext<TabsContext>(TABS, {
		registerTab: (tab: any) => {
			if (tabs.length === (activeIndex ?? 0)) {
				selectedTab.update((current) => current || tab)
			}
			tabs.push(tab)
		},
		removeTab(tab: any) {
			const i = tabs.indexOf(tab)
			tabs.splice(i, 1)
			selectedTab.update((current) =>
				current === tab ? tabs[i] || tabs[tabs.length - 1] : current
			)
		},
		registerPanel: (panel: any) => {
			panels.push(panel)
			selectedPanel.update((current) => current || panel)
			const index = panels.length - 1

			if (tabs[index]?.active) {
				selectedPanel.update((current) => panel)
			}
		},
		removePanel: (panel: any) => {
			const i = panels.indexOf(panel)
			panels.splice(i, 1)
			selectedPanel.update((current) =>
				current === panel ? panels[i] || panels[panels.length - 1] : current
			)
		},
		selectTab: (tab: any) => {
			const i = tabs.indexOf(tab)
			selectedTab.set(tab)
			selectedPanel.set(panels[i])
		},

		selectedTab,
		selectedPanel,
	})

	selectedTab.subscribe((value) => (activeIndex = tabs.findIndex((x) => x === value)))

	$effect(() => {
		$selectedTab = tabs[activeIndex]
		$selectedPanel = panels[activeIndex]
	})

	let props: TabsProps = $derived({
		...restProps,
		componentName,
		cssProps: {
			vertical,
		},
	})
</script>

<El {...props}>
	{@render children?.()}
</El>
