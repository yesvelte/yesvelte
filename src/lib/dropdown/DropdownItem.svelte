<script lang="ts">
	import { El } from '../el'
	import type { DropdownItemProps } from './Dropdown.types'

	type $$Props = DropdownItemProps

	let {
		componentName = 'dropdown-item',
		divider,
		header,
		active,
		disabled,
		href,
		children,
		...restProps
	}: $$Props = $props()

	let wrapperProps: $$Props = $derived({
		componentName: componentName + '-wrapper',
		tag: 'li',
	})

	let props: $$Props = $derived({
		...restProps,
		componentName,
		href,
		tag: 'a',
		cssProps: {
			active,
			disabled,
			header,
			divider,
		},
	})
</script>

{#if divider}
	<El tag="hr" componentName="{componentName}-divider" />
{:else if header}
	<El tag="h6" componentName="{componentName}-header">
		{@render children?.()}
	</El>
{:else}
	<El {...wrapperProps}>
		<El {...props}>
			{@render children?.()}
		</El>
	</El>
{/if}
