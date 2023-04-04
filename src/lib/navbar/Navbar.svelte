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
		<El componentName="{componentName}-content">
			<El componentName="{componentName}-items" tag="ul">
				<slot />
			</El>
		</El>
	</El>
</El>
