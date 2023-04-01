<script lang="ts">
	import { El } from '../el'
	import type { NavTogglerProps } from './Navbar.types'

	type $$Props = NavTogglerProps

	export let componentName: $$Props['componentName'] = 'nav-toggler'
</script>

<El tag="button" {componentName}>
	<slot />
</El>
