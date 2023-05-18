<script lang="ts">
	import { get_current_component } from 'svelte/internal'
	import { getContext } from 'svelte'
	import { El } from '../el'
	import type { TabPanelProps, TabsContext } from './Tab.types'
	import { TABS } from './Tabs.svelte'

	type $$Props = TabPanelProps

	export let componentName: $$Props['componentName'] = 'tab-pane'
	export let role: $$Props['role'] = 'tabpanel'

	const panel = {}
	const components = [get_current_component(), ...($$props.components ?? [])]

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
	<El {components} {...$$restProps} {...props}>
		<slot />
	</El>
{/if}
