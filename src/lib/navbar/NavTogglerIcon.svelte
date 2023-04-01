<script lang="ts">
	import { El } from '../el'
	import type { NavTogglerIconProps } from './Navbar.types'

	type $$Props = NavTogglerIconProps

	export let componentName: $$Props['componentName'] = 'nav-toggler-icon'
</script>

<El tag="span" {componentName}>
	<slot />
</El>
