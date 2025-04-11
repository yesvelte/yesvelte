<script lang="ts">
	import { setContext } from 'svelte'
	import { El } from '../el'
	import type { ToastProps } from './Toast.types'

	type $$Props = ToastProps

	let {
		componentName = 'toast',
		show = $bindable(false),
		children,
		...restProps
	}: $$Props = $props()

	function hide() {
		show = false
	}

	setContext('TOAST', { hide })
</script>

<El {...restProps} {componentName} {show}>
	{@render children?.()}
</El>
