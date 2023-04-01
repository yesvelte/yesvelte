<script lang="ts">
	import { El } from '../el'
	import type { NavBrandProps } from './Navbar.types'

	type $$Props = NavBrandProps

	export let href: $$Props['href'] = undefined
	export let componentName: $$Props['componentName'] = 'nav-brand'

	$: props = {
		href,
		componentName,
	}
</script>

<El  {...$$restProps} tag="a" {...props}>
	<slot />
</El>
