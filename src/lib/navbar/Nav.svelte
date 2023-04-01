<script lang="ts">
	import { El } from '../el'
	import type { NavProps } from './Navbar.types'

	type $$Props = NavProps

	export let componentName: $$Props['componentName'] = 'nav'
</script>

<El {...$$restProps} {componentName} tag="ul">
	<slot />
</El>
