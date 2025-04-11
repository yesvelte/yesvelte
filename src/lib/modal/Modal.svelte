<script lang="ts">
	import { classname } from '../internal'
	import { createEventDispatcher } from 'svelte'
	import type { ModalProps } from './Modal.types'
	import { El } from '../el'
	import { Button } from '../button'
	import ModalTitle from './ModalTitle.svelte'
	import ModalHeader from './ModalHeader.svelte'
	import { onMount } from 'svelte'
	import type { FocusTrap } from 'focus-trap'

	const dispatch = createEventDispatcher()

	type $$Props = ModalProps

	let {
		autoClose,
		backdrop = true,
		componentName = 'modal',
		absolute,
		dismissible,
		show = $bindable(),
		placement = 'top',
		scrollable,
		size = 'md',
		title,
		children,
		closeSnippet,
		...restProps
	}: $$Props = $props()

	export const close = () => {
		show = false
		dispatch('close')
	}

	const handleEscapeKey = (event: any) => {
		if (show && element && autoClose && event.key === 'Escape' && !event.defaultPrevented) {
			close()
		}
	}

	const handleOutsideClick = (event: any) => {
		restProps.onclick?.()
		if (show && element && autoClose && !event.defaultPrevented) {
			close()
		}
	}

	$effect(() => {
		if (typeof window !== 'undefined' && !absolute) {
			if (show) {
				document.body.classList.add(classname('body-modal-show') ?? '')
			} else {
				if (document.body.classList.contains(classname('body-modal-show') ?? '')) {
					document.body.classList.remove(classname('body-modal-show') ?? '')
				}
			}
		}
	})

	let element: HTMLDivElement | undefined = $state(undefined)
	let instance: FocusTrap | undefined = $state(undefined)

	const onClickContent = (e: any) => {
		e.stopPropagation()
	}

	onMount(() => {
		import('focus-trap').then((focusTrap) => {
			instance = focusTrap.createFocusTrap(element, {
				escapeDeactivates: false,
			})
		})

		if (document && autoClose) {
			document.addEventListener('keyup', handleEscapeKey, true)

			return () => {
				document.removeEventListener('keyup', handleEscapeKey, true)
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
					console.log('erro: ', err)
					//
				}
			}, 500)
		}
	})

	let props: $$Props = $derived({
		...restProps,
		componentName,
		cssProps: {
			placement,
			scrollable,
			size,
			absolute,
		},
		onclick: handleOutsideClick,
		tabindex: 0,
		role: 'dialog',
		show,
	})
</script>

<El bind:element {...props}>
	<El componentName="{componentName}-container">
		<El componentName="{componentName}-content" onclick={onClickContent}>
			{#if title}
				<ModalHeader>
					<ModalTitle>{title}</ModalTitle>
				</ModalHeader>
			{/if}
			{@render children?.()}
			{#if closeSnippet}
				{@render closeSnippet()}
			{:else if dismissible}
				<Button
					aria-label="X"
					type="button"
					componentName="{componentName}-close"
					onclick={() => close()} />
			{/if}
		</El>
	</El>
</El>
{#if backdrop}
	<El componentName="{componentName}-backdrop" cssProps={{ absolute }} {show} />
{/if}
