<script lang="ts">
	import { setContext } from 'svelte'
	import { El } from '../el'
	import type { ToastProps } from './Toast.types'

	type $$Props = ToastProps

	export let componentName: $$Props['componentName'] = 'toast'
	export let show: $$Props['show'] = false

	function hide() {
		show = false
	}

	setContext('TOAST', { hide })
</script>

{show}
<El {...$$restProps} {componentName} {show}>
	<slot />
</El>
