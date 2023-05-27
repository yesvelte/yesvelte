<script lang="ts">
	import { get_current_component } from 'svelte/internal'
	import { El } from '../el'
	import type { PopoverBodyProps } from './Popover.types'

	type $$Props = PopoverBodyProps

	export let componentName: $$Props['componentName'] = 'popover-body'
	const components = [
		{ component: get_current_component(), except: [] },
		...($$props.components ?? []),
	]
</script>

<El {components} {...$$restProps} {componentName}>
	<slot />
</El>
