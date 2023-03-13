<script lang="ts">
	import { El } from '../el'
	import type  { ToastContainerProps } from './Toast.types'

	type $$Props = ToastContainerProps

	export let componentName: $$Props['componentName'] = 'toast-container'
</script>

<El {...$$restProps} {componentName}>
	<slot />
</El>