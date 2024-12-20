<script lang="ts">
	import { El } from '../el'
	import type { BreadcrumbProps } from './Breadcrumb.types'

	type $$Props = BreadcrumbProps

	let { componentName = 'breadcrumb', separator, children, ...restProps }: $$Props = $props()

	let props: BreadcrumbProps = $derived({
		...restProps,
		componentName,
		cssProps: {
			separator,
		},
	})
</script>

<El tag="nav" aria-label="breadcrumb">
	<El tag="ol" {...props}>
		{@render children?.()}
	</El>
</El>
