<!-- @css:ribbon -->
<script lang="ts">
	import { get_current_component } from 'svelte/internal'
	import { El } from '../el'

	import type { RibbonProps } from './Ribbon.types'

	type $$Props = RibbonProps

	export let componentName: $$Props['componentName'] = 'ribbon'
	export let bgColor: $$Props['bgColor'] = undefined
	export let elementPosition: $$Props['elementPosition'] = 'end'

	const components = [
		{ component: get_current_component(), except: [] },
		...($$props.components ?? []),
	]

	let cssProps: RibbonProps = {}
	let otherProps: RibbonProps = {}
	$: {
		cssProps = {
			bgColor,
			elementPosition,
		}
		otherProps = {
			componentName,
		}
	}
</script>

<El {components} {...$$restProps} {cssProps} {...otherProps}>
	<slot />
</El>
