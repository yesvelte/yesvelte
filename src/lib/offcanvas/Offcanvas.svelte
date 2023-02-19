<script lang="ts">
	import { onMount, setContext } from 'svelte'
	import { El } from '../el'
	import type { OffcanvasProps } from './Offcanvas.types'

	type $$Props = OffcanvasProps

	export let componentName: $$Props['componentName'] = 'offcanvas'
	export let placement: $$Props['placement'] = 'start'
	export let scroll: $$Props['scroll'] = undefined
	export let backdrop: $$Props['backdrop'] = undefined
	export let autoClose: $$Props['autoClose'] = undefined
	export let show: $$Props['show'] = undefined

	// todo: create event dispatcher
	const close = () => {
		show = false
	}
	setContext('OFFCANVAS', { close })

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

{#if show}
	<El componentName="{componentName}-wrapper">
		<El {...props} {...$$restProps} {cssProps} {componentName} bind:element tabindex="0">
			<slot />
		</El>
		<!-- {#if backdrop}
			<El componentName="{componentName}-backdrop" on:click={handleOutsideClick} />
		{/if}
		{#if !scroll}
			<El componentName="{componentName}-no-scroll" />
		{/if} -->
	</El>
{/if}
