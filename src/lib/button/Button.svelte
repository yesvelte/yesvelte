<script lang="ts">
	import { El } from '../el'
	import type { ButtonProps } from './Button.types'

	type $$Props = ButtonProps

	let {
		active,
		color,
		componentName = 'button',
		disabled,
		ghost,
		href,
		link,
		loading,
		outline,
		shape,
		size,
		target,
		type,
		children,
		...restProps
	}: $$Props = $props()

	let element: HTMLElement | undefined = $state(undefined)

	let icon = $derived(!(element?.textContent ?? true))

	let props: $$Props = $derived({
		...restProps,
		componentName,
		href,
		role: 'button',
		tag: href ? 'a' : 'button',
		target,
		type: type ?? 'button',
		cssProps: {
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
		},
	})
</script>

<El bind:element {...props}>
	{@render children?.()}
</El>
