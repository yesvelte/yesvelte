<!-- @css:navbar -->
<script lang="ts">
	import { get_current_component } from 'svelte/internal'
	import { El } from '../el'
	import type { NavbarProps } from './Navbar.types'

	type $$Props = NavbarProps
	export let componentName: $$Props['componentName'] = 'navbar'
	export let theme: $$Props['theme'] = undefined

	const components = [
		{ component: get_current_component(), except: [] },
		...($$props.components ?? []),
	]

	$: cssProps = {
		theme,
	}
</script>

<El {...$$restProps} {components} componentName="{componentName}-wrapper" {cssProps}>
	<El {componentName}>
		<El componentName="{componentName}-content" tag="ul">
			<slot />
		</El>
	</El>
</El>
