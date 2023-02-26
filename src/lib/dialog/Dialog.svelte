<script lang="ts">
	import { setContext } from 'svelte/internal'

	import { classname } from '../internal'

	import type { DialogProps } from './Dialog.types'
	import { El } from '../el'

	type $$Props = DialogProps

	/**
	 * Make page's color Dimmer
	 */
	export let backdrop: $$Props['backdrop'] = true

	/**
	 * TODO
	 */
	export let componentName: $$Props['componentName'] = 'dialog'

	/**
	 * TODO
	 */
	export let tag: $$Props['tag'] = 'div'

	/**
	 * set position relative to it's parent (instead of entire screen)
	 */
	export let absolute: $$Props['absolute'] = undefined

	/**
	 * Controls open/close state of Dialog
	 */
	export let open: $$Props['open'] = undefined

	/**
	 * Do not close dialog if user clicked outside of Dialog Component
	 */
	export let persistent: $$Props['persistent'] = undefined

	/**
	 * Set position of Dialog
	 */
	export let placement: $$Props['placement'] = 'top'

	/**
	 * Makes dialog's body scrollable
	 */
	export let scrollable: $$Props['scrollable'] = undefined

	/**
	 * Changes width of Dialog
	 */
	export let size: $$Props['size'] = 'md'

	function hide(force = false) {
		if (!force && persistent) return
		open = false
	}

	setContext('DIALOG', { hide })

	$: if (typeof window !== 'undefined') {
		if (open) {
			document.body.classList.add(classname('body-dialog-open') ?? '')
		} else {
			if (document.body.classList.contains(classname('body-dialog-open') ?? '')) {
				document.body.classList.remove(classname('body-dialog-open') ?? '')
			}
		}
	}

	let cssProps: any
	$: cssProps = {
		placement,
		scrollable,
		size,
		open,
		absolute,
	}
</script>

<El {...$$restProps} {tag} {componentName} {cssProps} on:click={() => hide()}>
	<El componentName="{componentName}-container">
		<slot />
	</El>
</El>

{#if backdrop}
	<El componentName="{componentName}-backdrop" cssProps={{ open, absolute }} />
{/if}
