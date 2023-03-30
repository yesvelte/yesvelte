<script lang="ts">
	import { El } from '../el'
	import type { DropdownItemProps } from './Dropdown.types'

	type $$Props = DropdownItemProps

	export let componentName: $$Props['componentName'] = 'dropdown-item'

	export let divider: $$Props['divider'] = undefined
	export let header: $$Props['header'] = undefined
	export let active: $$Props['active'] = undefined
	export let disabled: $$Props['disabled'] = undefined

	export let href: $$Props['href'] = undefined

	$: cssProps = {
		active,
		disabled,
		header,
		divider,
	}

	let wrapperProps: $$Props
	$: wrapperProps = {
		componentName: componentName + '-wrapper',
		tag: 'li',
	}

	let props: $$Props
	$: props = {
		componentName,
		href,
		tag: 'a',
	}
</script>

{#if divider}
	<El tag="hr" componentName="{componentName}-divider" />
{:else if header}
	<El tag="h6" componentName="{componentName}-header">
		<slot />
	</El>
{:else}
	<El {...$$restProps} {...wrapperProps}>
		<El {...props} {cssProps} on:click>
			<slot />
		</El>
	</El>
{/if}
