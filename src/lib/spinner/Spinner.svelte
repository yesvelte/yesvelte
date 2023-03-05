<script lang="ts">
	import type { SpinnerProps } from './Spinner.types'
	import { El } from '../el'

	type $$Props = SpinnerProps

	export let componentName: $$Props['componentName'] = 'spinner'
	export let color: $$Props['color'] = undefined
	export let size: $$Props['size'] = undefined
	export let role: $$Props['role'] = 'status'
	export let animate: $$Props['animate'] = undefined

	let props: $$Props = {}
	let cssProps: $$Props = {}

	$: {
		cssProps = {
			size,
			color,
			animate,
		}

		props = {
			componentName,
			role,
		}
	}
</script>

<El tag="span" {...$$restProps} {cssProps} {...props}>
	<slot />
</El>
