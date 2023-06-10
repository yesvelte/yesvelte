	<!-- @css:popover -->

<script lang="ts">
	import { get_current_component } from 'svelte/internal'
	import { El } from '../el'
	import type { PopoverHeaderProps } from './Popover.types'

	type $$Props = PopoverHeaderProps

	export let componentName: $$Props['componentName'] = 'popover-header'
	const components = [
		{ component: get_current_component(), except: [] },
		...($$props.components ?? []),
	]
</script>

<El {components} {...$$restProps} {componentName}>
	<slot />
</El>
