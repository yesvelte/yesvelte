<script lang="ts">
	import { El } from '../el'
	import type { NavbarProps } from './Navbar.types'

	type $$Props = NavbarProps
	export let componentName: $$Props['componentName'] = 'navbar'

	$: cssProps = {
		//
	}
</script>

<El {...$$restProps} componentName="{componentName}-wrapper" {cssProps}>
	<El {componentName}>
		<slot name="start" />
		<El componentName="{componentName}-content">
			<slot />
		</El>
		<slot name="end" />
	</El>
</El>
