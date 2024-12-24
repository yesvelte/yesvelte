<script lang="ts">
	import { Icon } from '../icon'
	import { El, type ElProps } from '../el'
	import type { SidebarItemProps } from './Sidebar.types'
	import { Popup } from '../popup'

	type $$Props = SidebarItemProps

	let {
		componentName = 'sidebar-item',
		disabled,
		active,
		onclick,
		icon,
		title,
		href,
		children,
		startSnippet,
		titleSnippet,
		endSnippet,
		...restProps
	}: $$Props = $props()

	let wrapperProps: Partial<ElProps> = $derived({
		...restProps,
		tag: 'li',
		componentName: componentName + '-wrapper',
		cssProps: { dropdown: !!children },
	})

	let props: Partial<ElProps> = $derived({
		tag: href ? 'a' : 'div',
		href,
		componentName,
		cssProps: {
			disabled,
			onclick,
			active,
			dropdown: !!children,
		},
	})
</script>

<El {...wrapperProps}>
	<El {...props}>
		{#if icon || startSnippet}
			<El tag="span" componentName="{componentName}-icon">
				{#if startSnippet}
					{@render startSnippet()}
				{:else}
					<Icon name={icon} />
				{/if}
			</El>
		{/if}
		{#if title || titleSnippet}
			<El tag="span" componentName="{componentName}-title">
				{#if titleSnippet}
					{@render titleSnippet()}
				{:else}
					{title}
				{/if}
			</El>
		{/if}
		{#if endSnippet}
			<El componentName="{componentName}-end">
				{@render endSnippet()}
			</El>
		{/if}
	</El>

	{#if children}
		<Popup
			tag="ul"
			trigger="click"
			bind:show={active}
			autoClose={false}
			placement="right-start"
			componentName="{componentName}-menu">
			{@render children()}
		</Popup>
	{/if}
</El>
