<script lang="ts">
	import { classname } from '../internal'

	import type { ModalProps } from './Modal.types'
	import { El } from '../el'
	import ModalClose from './ModalClose.svelte'
	import ModalTitle from './ModalTitle.svelte'
	import ModalHeader from './ModalHeader.svelte'

	type $$Props = ModalProps

	/**
	 * Make page's color Dimmer
	 */
	export let backdrop: $$Props['backdrop'] = true

	/**
	 * TODO
	 */
	export let componentName: $$Props['componentName'] = 'modal'

	/**
	 * set position relative to it's parent (instead of entire screen)
	 */
	export let absolute: $$Props['absolute'] = undefined

	/**
	 * Show close button inside modal
	 */
	export let dismissible: $$Props['dismissible'] = undefined

	/**
	 * Controls open/close state of Modal
	 */
	export let open: $$Props['open'] = undefined

	/**
	 * Do not close modal if user clicked outside of Modal Component
	 */
	export let persistent: $$Props['persistent'] = undefined

	/**
	 * Set position of Modal
	 */
	export let placement: $$Props['placement'] = 'top'

	/**
	 * Makes modal's body scrollable
	 */
	export let scrollable: $$Props['scrollable'] = undefined

	/**
	 * Changes width of Modal
	 */
	export let size: $$Props['size'] = 'md'

	/**
	 * Changes width of Modal
	 */
	export let title: $$Props['title'] = undefined

	function hide(force = false) {
		if (!force && persistent) return
		open = false
	}

	$: if (typeof window !== 'undefined' && !absolute) {
		if (open) {
			document.body.classList.add(classname('body-modal-open') ?? '')
		} else {
			if (document.body.classList.contains(classname('body-modal-open') ?? '')) {
				document.body.classList.remove(classname('body-modal-open') ?? '')
			}
		}
	}

	function onClickContent(e: any) {
		e.stopPropagation()
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

<El {...$$restProps} {componentName} {cssProps} on:click={() => hide()}>
	<El componentName="{componentName}-container">
		<El componentName="{componentName}-content" on:click={onClickContent}>
			{#if title}
				<ModalHeader>
					<ModalTitle>{title}</ModalTitle>
				</ModalHeader>
			{/if}
			<slot />
			<slot name="close">
				{#if dismissible}
					<ModalClose on:close={() => hide(true)} />
				{/if}
			</slot>
		</El>
	</El>
</El>

{#if backdrop}
	<El componentName="{componentName}-backdrop" cssProps={{ open, absolute }} />
{/if}
