<script lang="ts">
	import { get_current_component } from 'svelte/internal'
	import { El } from '../el'
	import type { ToastContainerProps } from './Toast.types'

	type $$Props = ToastContainerProps

	export let componentName: $$Props['componentName'] = 'toast-container'
	export let placement: $$Props['placement'] = undefined
	const components = [get_current_component(), ...($$props.components ?? [])]

	$: cssProps = {
		placement,
	}
</script>

<El {components} {...$$restProps} {componentName} {cssProps}>
	<slot />
</El>
