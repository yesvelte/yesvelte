<script lang="ts">
	import { Icon } from '../icon'
	import { El, type ElProps } from '../el'
	import type { NavbarItemProps } from './Navbar.types'
	import { Popup } from '../popup'

	type $$Props = NavbarItemProps

	export let componentName: $$Props['componentName'] = 'navbar-item'
	export let disabled: $$Props['disabled'] = undefined
	export let active: $$Props['active'] = undefined
	export let divider: $$Props['divider'] = undefined
	export let icon: $$Props['icon'] = undefined
	export let title: $$Props['title'] = undefined
	export let href: $$Props['href'] = undefined

	let wrapperProps: Partial<ElProps>
	$: wrapperProps = {
		tag: 'li',
		componentName: componentName + '-wrapper',
	}

	let props: Partial<ElProps>
	$: props = {
		tag: 'a',
		href,
		componentName,
	}

	$: dropdown = $$slots['default']
	$: cssProps = {
		disabled,
		dropdown,
		active,
	}
</script>

<El {...$$restProps} {...wrapperProps} cssProps={{ dropdown }}>
	{#if divider}
		<El tag="hr" componentName="{componentName}-divider" />
	{:else}
		<El on:click tag="a" {...props} {cssProps}>
			{#if icon || $$slots['start']}
				<El tag="span" componentName="{componentName}-icon">
					<slot name="start">
						<Icon name={icon} />
					</slot>
				</El>
			{/if}
			{#if title || $$slots['title']}
				<El tag="span" componentName="{componentName}-title">
					<slot name="title">
						{title}
					</slot>
				</El>
			{/if}
			{#if $$slots['end']}
				<El componentName="{componentName}-end">
					<slot name="end" />
				</El>
			{/if}
		</El>
		{#if $$slots['default']}
			<Popup
				tag="ul"
				trigger="click"
				bind:show={active}
				autoClose
				placement="bottom-start"
				componentName="{componentName}-menu">
				<slot />
			</Popup>
		{/if}
	{/if}
</El>
