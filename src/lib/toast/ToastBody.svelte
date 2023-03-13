<script lang="ts">
	import { El } from '../el'
	import type { ToastBodyProps } from './Toast.types'
	
    type $$Props = ToastBodyProps
	
    export let componentName: $$Props['componentName'] = 'toast-body'

</script>

<El {...$$restProps} {componentName}>
	<slot />
</El>