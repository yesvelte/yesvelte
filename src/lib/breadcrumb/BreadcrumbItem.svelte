<script lang="ts">
	import { El } from '../el'
	import type { BreadcrumbItemProps } from './Breadcrumb.types'

	type $$Props = BreadcrumbItemProps

	let {
		componentName = 'breadcrumb-item',
		active,
		href,
		children,
		...restProps
	}: $$Props = $props()

	let props: $$Props = $derived({
		...restProps,
		tag: 'li',
		componentName,
		'aria-current': `${active ?? 'page'}`,
		cssProps: {
			active,
		},
	})
</script>

<El {...props}>
	{#if href}
		<El tag="a" {href} componentName="{componentName}-inner">
			{@render children?.()}
		</El>
	{:else}
		{@render children?.()}
	{/if}
</El>
