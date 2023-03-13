<script lang="ts">
	import { El } from '../el'
	import type { PopoverBodyProps } from './Popover.types'

	type $$Props = PopoverBodyProps

    export let componentName: $$Props['componentName'] = 'popover-body'
    
</script>

<El {...$$restProps} {componentName}>
	<slot />
</El>
