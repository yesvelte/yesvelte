<script lang="ts">
	import { El } from '../el'
	import type { SidebarProps } from './Sidebar.types'

	type $$Props = SidebarProps
	export let componentName: $$Props['componentName'] = 'sidebar'
	export let theme: $$Props['theme'] = undefined

	$: cssProps = {
		theme,
	}
</script>

<El {...$$restProps} componentName="{componentName}-wrapper" {cssProps}>
	<El {componentName}>
		<El componentName="{componentName}-content">
			<slot />
		</El>
	</El>
</El>
