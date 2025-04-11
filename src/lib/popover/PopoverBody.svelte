<script lang="ts">
	import { El } from '../el'
	import type { PopoverBodyProps } from './Popover.types'

	type $$Props = PopoverBodyProps

	let { componentName = 'popover-body', children, ...restProps } = $props()
</script>

<El {...restProps} {componentName}>
	{@render children?.()}
</El>
