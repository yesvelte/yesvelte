<script lang="ts">
	import { El } from '../el'

	import type { RibbonProps } from './Ribbon.types'

	type $$Props = RibbonProps

	export let componentName: $$Props['componentName'] = 'ribbon'
	export let bgColor: $$Props['bgColor'] = undefined
	export let elementPosition: $$Props['elementPosition'] = 'end'

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

<El {...$$restProps} {cssProps} {...otherProps}>
	<slot />
</El>
