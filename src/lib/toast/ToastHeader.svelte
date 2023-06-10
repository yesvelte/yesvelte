	<!-- @css:toast -->

<script lang="ts">
	import { get_current_component } from 'svelte/internal'
	import { Button, type ButtonProps } from '../button'
	import { getContext } from 'svelte'
	import { El } from '../el'
	import type { ToastContext, ToastHeaderProps } from './Toast.types'

	type $$Props = ToastHeaderProps

	export let componentName: $$Props['componentName'] = 'toast-header'
	export let tag: $$Props['tag'] = 'div'
	export let showCloseButton: $$Props['showCloseButton'] = true

	const components = [
		{ component: get_current_component(), except: [] },
		...($$props.components ?? []),
	]
	const { hide } = getContext<ToastContext>('TOAST')

	let buttonOtherProps: Partial<ButtonProps>
	$: buttonOtherProps = {
		componentName: 'toast-close',
		'aria-label': 'Close',
	}

	$: cssProps = {
		//
	}
</script>

<El {components} {...$$restProps} {componentName} {cssProps} {tag}>
	<slot />
	{#if showCloseButton}
		<Button on:click={hide} {...buttonOtherProps} />
	{/if}
</El>
