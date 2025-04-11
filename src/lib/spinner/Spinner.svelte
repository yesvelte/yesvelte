<script lang="ts">
	import type { SpinnerProps } from './Spinner.types'

	import { El } from '../el'

	type $$Props = SpinnerProps

	let {
		componentName = 'spinner',
		color,
		size,
		role = 'status',
		animate = 'border',
		children,
		...restProps
	}: $$Props = $props()

	let props: $$Props = $derived({
		...restProps,
		tag: 'span',
		componentName,
		role,
		cssProps: {
			size,
			color,
			animate,
		},
	})
</script>

<El {...props}>
	<slot />
</El>
