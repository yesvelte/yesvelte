<script lang="ts">
	import { El, type ElProps } from '../el'
	import type { PaginationItemProps } from './Pagination.types'

	type $$Props = PaginationItemProps

	let {
		componentName = 'pagination-item',
		href,
		active,
		disabled,
		children,
		...restProps
	}: $$Props = $props()

	function onclick() {
		if (disabled) return
		restProps.onclick?.()
	}

	let linkProps: Partial<ElProps> = $derived({
		tag: 'a',
		href,
		componentName: componentName + '-link',
	})

	let props: $$Props = $derived({
		...restProps,
		componentName,
		onclick,
		cssProps: {
			active,
			disabled,
		},
	})
</script>

<El {...props}>
	<El {...linkProps}>
		{@render children?.()}
	</El>
</El>
