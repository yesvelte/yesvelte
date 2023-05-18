<script lang="ts">
	import { get_current_component } from 'svelte/internal'
	import { El } from '../el'
	import type { ProgressProps } from './Progress.types'

	type $$Props = ProgressProps

	export let componentName: $$Props['componentName'] = 'progress'
	export let size: $$Props['size'] = undefined
	export let separated: $$Props['separated'] = undefined

	const components = [get_current_component(), ...($$props.components ?? [])]

	let cssProps: $$Props = {}
	let props: $$Props = {}

	$: {
		cssProps = {
			size,
			separated,
		}
		props = {
			componentName,
		}
	}
</script>

<El {components} {...$$restProps} {cssProps} {...props} role="progressbar">
	<slot />
</El>
