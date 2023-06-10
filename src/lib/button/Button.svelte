	<!-- @css:button -->

<script lang="ts">
	import { get_current_component } from 'svelte/internal'
	import { El } from '../el'
	import type { ButtonProps } from './Button.types'

	type $$Props = ButtonProps

	export let active: $$Props['active'] = undefined
	export let color: $$Props['color'] = undefined
	export let componentName: $$Props['componentName'] = 'button'
	export let disabled: $$Props['disabled'] = undefined
	export let ghost: $$Props['ghost'] = undefined
	export let href: $$Props['href'] = undefined
	export let link: $$Props['link'] = undefined
	export let loading: $$Props['loading'] = undefined
	export let outline: $$Props['outline'] = undefined
	export let shape: $$Props['shape'] = undefined
	export let size: $$Props['size'] = undefined
	export let target: $$Props['target'] = undefined
	export let type: $$Props['type'] = undefined

	const components = [
		{ component: get_current_component(), except: [] },
		...($$props.components ?? []),
	]

	let cssProps: any = {}
	let props: $$Props = {}

	let element: HTMLElement

	$: icon = !(element?.textContent ?? true)

	$: {
		cssProps = {
			active,
			color,
			disabled,
			ghost,
			icon,
			link,
			loading,
			outline,
			shape,
			size,
		}
		props = {
			componentName,
			href,
			role: 'button',
			tag: href ? 'a' : 'button',
			target,
			type: type ?? 'button',
		}
	}
</script>

<El {components} bind:element {...$$restProps} {cssProps} {...props} on:click>
	<slot />
</El>
