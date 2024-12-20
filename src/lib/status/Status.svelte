<script lang="ts">
	import { El } from '../el'
	import type { StatusProps } from './Status.types'

	type $$Props = StatusProps

	let { componentName = 'status', color, lite, children, ...restProps }: $$Props = $props()

	let props: $$Props = $derived({
		...restProps,
		tag: 'span',
		componentName,
		cssProps: {
			color,
			lite,
		},
	})
</script>

<El {...props}>
	{@render children?.()}
</El>
