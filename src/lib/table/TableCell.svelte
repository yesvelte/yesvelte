<script lang="ts">
	import { getContext } from 'svelte'

	import { El } from '../el'
	import type { TableCellProps } from './Table.types'

	type $$Props = TableCellProps

	let {
		tag = 'td',
		componentName = 'table-cell',
		color,
		truncate,
		active,
		children,
		...restProps
	}: $$Props = $props()

	let head = getContext('TABLE:HEAD') ?? false

	let props: $$Props = $derived({
		...restProps,
		componentName,
		tag: head ? 'th' : 'td',
		cssProps: {
			color,
			truncate,
			active,
		},
	})
</script>

<El {...props}>
	{@render children?.()}
</El>
