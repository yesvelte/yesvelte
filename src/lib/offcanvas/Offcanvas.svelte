<script lang="ts">
	import { onMount, setContext, createEventDispatcher } from 'svelte'
	import { El } from '../el'
	import type { OffcanvasProps } from './Offcanvas.types'

	import type { FocusTrap } from 'focus-trap'

	type $$Props = OffcanvasProps

	let {
		componentName = 'offcanvas',
		placement = 'start',
		noScroll,
		backdrop,
		autoClose,
		show = $bindable(),
		children,
		...restProps
	}: $$Props = $props()

	const close = () => {
		show = false
		restProps.onclose?.()
	}

	setContext<OffcanvasProps>('OFFCANVAS', { close })

	let element: HTMLElement | undefined = $state(undefined)
	let instance: FocusTrap | undefined = $state(undefined)

	const handleEscapeKey = (event: any) => {
		if (show && element && autoClose && event.key === 'Escape' && !event.defaultPrevented) {
			close()
		}
	}

	const handleOutsideClick = (event: any) => {
		if (
			show &&
			element &&
			autoClose &&
			!element.contains(event.target) &&
			!event.defaultPrevented
		) {
			close()
		}
	}

	onMount(() => {
		import('focus-trap').then((focusTrap) => {
			instance = focusTrap.createFocusTrap(element, {
				escapeDeactivates: false,
			})
		})
		if (document && autoClose) {
			document.addEventListener('keyup', handleEscapeKey, true)
			document.addEventListener('click', handleOutsideClick, true)

			return () => {
				document.removeEventListener('keyup', handleEscapeKey, true)
				document.removeEventListener('click', handleOutsideClick, true)
			}
		}
	})

	$effect(() => {
		if (instance && backdrop) {
			setTimeout(() => {
				try {
					if (show) {
						instance.activate()
					} else {
						instance.deactivate()
					}
				} catch (err) {
					//
				}
			}, 500)
		}
	})

	let props: OffcanvasProps = $derived({
		...restProps,
		componentName,
		cssProps: { placement },
	})
</script>

<El componentName="{componentName}-wrapper">
	<El {...props} {componentName} bind:element tabindex="0" {show}>
		{@render children?.()}
	</El>
	{#if backdrop}
		<El componentName="{componentName}-backdrop" on:click={handleOutsideClick} {show} />
	{/if}
	{#if show}
		{#if noScroll}
			<El componentName="{componentName}-no-scroll" />
		{/if}
	{/if}
</El>
