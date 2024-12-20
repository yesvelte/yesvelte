<script lang="ts">
	import { El } from '../el'

	import type { TableRowProps } from './Table.types'

	type $$Props = TableRowProps

	let {
		tag = 'tr',
		componentName = 'table-row',
		color,
		active,
		children,
		...restProps
	}: $$Props = $props()

	let props: $$Props = $derived({
		...restProps,
		componentName,
		tag,
		cssProps: {
			color,
			active,
		},
	})
</script>

<El {...props}>
	{@render children?.()}
</El>
