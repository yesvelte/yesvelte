<script lang="ts">
	import { El } from '../el'

	import type { RibbonProps } from './Ribbon.types'

	type $$Props = RibbonProps

	let {
		componentName = 'ribbon',
		bgColor,
		elementPosition = 'end',
		children,
		...restProps
	}: $$Props = $props()

	let otherProps: $$Props = $derived({
		...restProps,
		componentName,
		cssProps: {
			bgColor,
			elementPosition,
		},
	})
</script>

<El {...otherProps}>
	{@render children?.()}
</El>
