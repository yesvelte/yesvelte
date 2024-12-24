<script lang="ts">
	import { El } from '../el'
	import type { SidebarProps } from './Sidebar.types'

	type $$Props = SidebarProps

	let { componentName = 'sidebar', theme, children, ...restProps }: $$Props = $props()

	let cssProps = $derived({
		theme,
	})
</script>

<El {...restProps} componentName="{componentName}-wrapper" {cssProps}>
	<El {componentName}>
		<El componentName="{componentName}-content">
			{@render children?.()}
		</El>
	</El>
</El>
