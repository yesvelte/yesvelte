<script lang="ts">
	import { El } from '../el'
	import type { PopoverHeaderProps } from './Popover.types'

	type $$Props = PopoverHeaderProps

    export let componentName: $$Props['componentName'] = 'popover-header'
    
</script>

<El {...$$restProps} {componentName}>
	<slot />
</El>
