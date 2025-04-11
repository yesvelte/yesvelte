<script lang="ts">
	import { El } from '../el'

	import type { TableProps } from './Table.types'

	type $$Props = TableProps

	let {
		tag = 'table',
		componentName = 'table',
		color,
		hover,
		striped,
		wrap,
		responsive,
		size,
		children,
		...restProps
	}: $$Props = $props()

	let tableProps: $$Props = $derived({
		...restProps,
		tag,
		componentName,
		cssProps: {
			color,
			// border,
			hover,
			striped,
			wrap,
			size,
		},
	})
</script>

<El componentName="{componentName}-wrapper" cssProps={{ responsive }}>
	<El {...tableProps}>
		{@render children?.()}
	</El>
</El>
