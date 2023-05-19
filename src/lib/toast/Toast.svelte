<script lang="ts">
	import { get_current_component } from 'svelte/internal'
	import { setContext } from 'svelte'
	import { El } from '../el'
	import type { ToastProps } from './Toast.types'

	type $$Props = ToastProps

	export let componentName: $$Props['componentName'] = 'toast'
	export let show: $$Props['show'] = false

	const components = [get_current_component(), ...($$props.components ?? [])]
	function hide() {
		show = false
	}

	setContext('TOAST', { hide })
</script>

<El {components}  {...$$restProps} {componentName} {show}>
	<slot />
</El>
