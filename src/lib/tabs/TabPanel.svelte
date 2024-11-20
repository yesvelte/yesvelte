<script lang="ts">
	import { getContext, onDestroy, onMount } from 'svelte'
	import { El } from '../el'
	import type { TabPanelProps, TabsContext } from './Tab.types'
	import { TABS } from './Tabs.svelte'

	type $$Props = TabPanelProps

	let { componentName = 'tab-pane', role = 'tabpanel', children, ...restProps }: $$Props = $props()

	const panel = $state({})

	const { registerPanel, removePanel, selectedPanel } = getContext<TabsContext>(TABS)

	onMount(() => {
		registerPanel(panel)
	})

	onDestroy(() => {
		removePanel(panel)
	})

	let props: TabPanelProps = $derived({
		...restProps,
		componentName,
		role,
	})
</script>

{#if $selectedPanel === panel}
	<El {...props}>
		{#if children}
			{@render children()}
		{/if}
	</El>
{/if}
