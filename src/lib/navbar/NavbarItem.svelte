<script lang="ts">
	import { Icon } from '../icon'
	import { El, type ElProps } from '../el'
	import type { NavbarItemProps } from './Navbar.types'
	import { Popup } from '../popup'

	type $$Props = NavbarItemProps

	let {
		componentName = 'navbar-item',
		disabled,
		active,
		onclick,
		divider,
		icon,
		title,
		href,
		children,
		titleSnippet,
		startSnippet,
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
		tag: 'a',
		href,
		componentName,
		onclick,
		cssProps: {
			disabled,
			dropdown: !!children,
			active,
		},
	})
</script>

<El {...wrapperProps}>
	{#if divider}
		<El tag="hr" componentName="{componentName}-divider" />
	{:else}
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
				autoClose
				placement="bottom-start"
				componentName="{componentName}-menu">
				{@render children()}
			</Popup>
		{/if}
	{/if}
</El>
