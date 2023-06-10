<!-- @css:sidebar -->
<script lang="ts">
	import { get_current_component } from 'svelte/internal'
	import { El } from '../el'
	import type { SidebarProps } from './Sidebar.types'

	type $$Props = SidebarProps
	export let componentName: $$Props['componentName'] = 'sidebar'
	export let theme: $$Props['theme'] = undefined
	const components = [
		{ component: get_current_component(), except: [] },
		...($$props.components ?? []),
	]

	$: cssProps = {
		theme,
	}
</script>

<El {components} {...$$restProps} componentName="{componentName}-wrapper" {cssProps}>
	<El {componentName}>
		<El componentName="{componentName}-content">
			<slot />
		</El>
	</El>
</El>
