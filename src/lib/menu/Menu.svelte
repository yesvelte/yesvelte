<script lang="ts">
	import { Popup } from '../popup'
	import { getContext, setContext } from 'svelte'
	import { El, type ElProps } from '../el'
	import type { MenuProps } from './Menu.types'

	type $$Props = MenuProps

	export let componentName: $$Props['componentName'] = 'menu'
	// export let show: $$Props['show'] = false

	const insideMenu = getContext('MENU')

	setContext('MENU', true)

	let props: Partial<ElProps>
	$: props = {
		tag: 'ul',
		componentName,
	}

	$: cssProps = {
		navbar: !insideMenu,
		dropdown: !!insideMenu,
	}
</script>

{#if insideMenu}
	<Popup {...$$restProps} persistent trigger="click" placement="right-start" {...props} {cssProps}>
		<slot />
	</Popup>
{:else}
	<El {...$$restProps} {...props} {cssProps}>
		<slot />
	</El>
{/if}
