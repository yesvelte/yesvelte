<script lang="ts">
	import { El } from '../el'
	import type { ProgressProps } from './Progress.types'

	type $$Props = ProgressProps

	export let componentName: $$Props['componentName'] = 'progress'
	export let size: $$Props['size'] = undefined
	export let separated: $$Props['separated'] = undefined

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

<El {...$$restProps} {cssProps} {...props} role="progressbar">
	<slot />
</El>
