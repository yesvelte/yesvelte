<script lang="ts">
	import { El } from '../el'
	import type  { ToastContainerProps } from './Toast.types'

	type $$Props = ToastContainerProps

	export let componentName: $$Props['componentName'] = 'toast-container'
	export let placement: $$Props['placement'] = undefined

	$: cssProps = {
		placement
	}
</script>

<El {...$$restProps} {componentName} {cssProps}>
	<slot />
</El>