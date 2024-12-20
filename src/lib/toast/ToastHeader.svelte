<script lang="ts">
	import { Button, type ButtonProps } from '../button'
	import { getContext } from 'svelte'
	import { El } from '../el'
	import type { ToastContext, ToastHeaderProps } from './Toast.types'

	type $$Props = ToastHeaderProps

	let {
		componentName = 'toast-header',
		tag = 'div',
		showCloseButton = true,
		children,
		...restProps
	}: $$Props = $props()

	const { hide } = getContext<ToastContext>('TOAST')

	let buttonProps: Partial<ButtonProps> = $derived({
		componentName: 'toast-close',
		'aria-label': 'Close',
		onclick: hide,
	})
</script>

<El {...restProps} {componentName} {tag}>
	{@render children?.()}
	{#if showCloseButton}
		<Button {...buttonProps} />
	{/if}
</El>
