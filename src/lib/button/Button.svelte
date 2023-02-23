<script lang="ts">
	import { El } from '../el'
	import type { ButtonProps } from './Button.types'

	type $$Props = ButtonProps

	export let active: $$Props['active'] = undefined
	export let color: $$Props['color'] = undefined
	export let componentName: $$Props['componentName'] = 'button'
	export let disabled: $$Props['disabled'] = undefined
	export let ghost: $$Props['ghost'] = undefined
	export let href: $$Props['href'] = undefined
	export let icon: $$Props['icon'] = undefined
	export let link: $$Props['link'] = undefined
	export let loading: $$Props['loading'] = undefined
	export let outline: $$Props['outline'] = undefined
	export let shape: $$Props['shape'] = 'round'
	export let size: $$Props['size'] = undefined
	export let target: $$Props['target'] = undefined
	export let type: $$Props['type'] = undefined
	export let value: $$Props['value'] = undefined

	let cssProps: ButtonProps = {}
	let props: ButtonProps = {}
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
			value,
		}
	}
</script>

<El {...$$restProps} {cssProps} {...props} on:click>
	<slot />
</El>
