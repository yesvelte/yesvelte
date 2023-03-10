<script lang="ts">
	import { onMount, setContext, createEventDispatcher } from 'svelte'
	import { El } from '../el'
	import type { OffcanvasProps } from './Offcanvas.types'

	type $$Props = OffcanvasProps

	export let componentName: $$Props['componentName'] = 'offcanvas'
	export let placement: $$Props['placement'] = 'start'
	export let noScroll: $$Props['noScroll'] = undefined
	export let backdrop: $$Props['backdrop'] = undefined
	export let autoClose: $$Props['autoClose'] = undefined
	export let show: $$Props['show'] = undefined

	const dispatch = createEventDispatcher()
	const close = () => {
		show = false
		dispatch('close')
	}

	setContext<OffcanvasProps>('OFFCANVAS', { close })

	let element: HTMLElement
	let props: OffcanvasProps = { componentName, ...$$restProps }
	let cssProps: OffcanvasProps = { placement, show }

	const handleEscapeKey = (event: any) => {
		if (element && autoClose && event.key === 'Escape' && !event.defaultPrevented) {
			close()
		}
	}

	const handleOutsideClick = (event: any) => {
		if (element && backdrop && !element.contains(event.target) && !event.defaultPrevented) {
			close()
		}
	}

	onMount(() => {
		if (element && autoClose) {
			element.addEventListener('keyup', handleEscapeKey, true)
			return () => {
				element.removeEventListener('keyup', handleEscapeKey, true)
			}
		}
	})

	$: {
		cssProps = { placement, show }
		if (element && show) {
			window.setTimeout(function () {
				element.focus()
			}, 0)
		} else if (element && !show) {
			element.blur()
		}
	}
</script>

<El componentName="{componentName}-wrapper">
	<El {...props} {...$$restProps} {cssProps} {componentName} bind:element tabindex="0">
		<slot />
	</El>
	{#if show}
		{#if backdrop}
			<El componentName="{componentName}-backdrop" on:click={handleOutsideClick} />
		{/if}
		{#if noScroll}
			<El componentName="{componentName}-no-scroll" />
		{/if}
	{/if}
</El>
