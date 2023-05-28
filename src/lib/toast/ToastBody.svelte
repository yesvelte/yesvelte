<script lang="ts">
	import { get_current_component } from 'svelte/internal'
	import { El } from '../el'
	import type { ToastBodyProps } from './Toast.types'

	type $$Props = ToastBodyProps

	export let componentName: $$Props['componentName'] = 'toast-body'
	const components = [
		{ component: get_current_component(), except: [] },
		...($$props.components ?? []),
	]
</script>

<El {components} {...$$restProps} {componentName}>
	<slot />
</El>
