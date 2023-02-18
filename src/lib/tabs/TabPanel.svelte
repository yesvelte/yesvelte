<script lang="ts">
	import { getContext } from 'svelte'
	import { El } from '../el'
	import type { TabPanelProps, TabsContext } from './Tab.types'
	import { TABS } from './Tabs.svelte'

	type $$Props = TabPanelProps

	export let componentName: $$Props['componentName'] = 'tab-pane'
	export let role: $$Props['role'] = 'tabpanel'

	const panel = {}
	const { registerPanel, selectedPanel } = getContext<TabsContext>(TABS)
	registerPanel(panel)

	let props: TabPanelProps = {}
	$: {
		props = {
			componentName,
			role,
		}
	}
</script>

{#if $selectedPanel === panel}
	<El {...$$restProps} {...props}>
		<slot />
	</El>
{/if}
