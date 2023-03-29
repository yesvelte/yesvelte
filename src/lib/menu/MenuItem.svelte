<script lang="ts">
	import { Icon } from '../icon'
	import { El, type ElProps } from '../el'
	import type { MenuItemProps } from './Menu.types'

	type $$Props = MenuItemProps

	export let componentName: $$Props['componentName'] = 'menu-item'
	export let disabled: $$Props['disabled'] = undefined
	export let active: $$Props['active'] = undefined
	export let divider: $$Props['divider'] = undefined
	export let icon: $$Props['icon'] = undefined
	export let title: $$Props['title'] = undefined

	let props: Partial<ElProps>
	$: props = {
		tag: 'li',
		componentName: componentName + '-wrapper',
	}

	$: dropdown = $$slots['default'] && !$$slots['end']
	$: cssProps = {
		disabled,
		dropdown,
		active,
		divider,
	}
</script>

<El {...$$restProps} {...props} {cssProps}>
	<El tag="a" {componentName} cssProps={{ dropdown }}>
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
	<slot />
</El>
