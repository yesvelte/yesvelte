<script lang="ts">
	import { El } from '../el'
	import type { NavbarProps } from './Navbar.types'

	type $$Props = NavbarProps
	export let componentName: $$Props['componentName'] = 'navbar'
	export let theme: $$Props['theme'] = undefined

	$: cssProps = {
		theme,
	}
</script>

<El {...$$restProps} componentName="{componentName}-wrapper" {cssProps}>
	<El {componentName}>
		<El componentName="{componentName}-content" tag="ul">
			<slot />
		</El>
	</El>
</El>
