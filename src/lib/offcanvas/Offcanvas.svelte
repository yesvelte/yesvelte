<script lang="ts">
	import { onMount, setContext, createEventDispatcher } from 'svelte'
	import { El } from '../el'
	import type { OffcanvasProps } from './Offcanvas.types'
	import { get_current_component } from 'svelte/internal'
	import type { FocusTrap } from 'focus-trap'

	type $$Props = OffcanvasProps

	export let componentName: $$Props['componentName'] = 'offcanvas'
	export let placement: $$Props['placement'] = 'start'
	export let noScroll: $$Props['noScroll'] = undefined
	export let backdrop: $$Props['backdrop'] = undefined
	export let autoClose: $$Props['autoClose'] = undefined
	export let show: $$Props['show'] = undefined

	const dispatch = createEventDispatcher()
	const components = [
		{ component: get_current_component(), except: ['close'] },
		...($$props.components ?? []),
	]

	const close = () => {
		show = false
		dispatch('close')
	}

	setContext<OffcanvasProps>('OFFCANVAS', { close })

	let element: HTMLElement
	let instance: FocusTrap
	let props: OffcanvasProps = { componentName, ...$$restProps }
	let cssProps: OffcanvasProps = { placement }

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

	$: if (instance && backdrop) {
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

	$: {
		cssProps = { placement }
	}
</script>

<El {components} componentName="{componentName}-wrapper">
	<El {...props} {...$$restProps} {cssProps} {componentName} bind:element tabindex="0" {show}>
		<slot />
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
