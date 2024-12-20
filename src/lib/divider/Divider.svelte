<script lang="ts">
	import { El } from '../el'
	import type { DividerProps } from './Divider.types'

	type $$Props = DividerProps

	let {
		componentName = 'divider',
		color,
		direction,
		alignment,
		children,
		...restProps
	}: $$Props = $props()

	let props: $$Props = $derived({
		...restProps,
		componentName,
		cssProps: {
			alignment,
			color,
			direction,
		},
	})
</script>

<El {...props}>
	{@render children?.()}
</El>
