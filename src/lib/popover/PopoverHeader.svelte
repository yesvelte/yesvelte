<script lang="ts">
	import { El } from '../el'
	import type { PopoverBodyProps } from './Popover.types'

	type $$Props = PopoverHeaderProps

	let { componentName = 'popover-header', children, ...restProps } = $props()
</script>

<El {...restProps} {componentName}>
	{@render children?.()}
</El>
