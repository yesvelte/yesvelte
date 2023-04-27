<script lang="ts">
	import { classname } from '../internal'
	import { createEventDispatcher } from 'svelte'
	import type { ModalProps } from './Modal.types'
	import { El } from '../el'
	import { Button } from '../button'
	import ModalTitle from './ModalTitle.svelte'
	import ModalHeader from './ModalHeader.svelte'

	const dispatch = createEventDispatcher()

	type $$Props = ModalProps

	export let backdrop: $$Props['backdrop'] = true
	export let componentName: $$Props['componentName'] = 'modal'
	export let absolute: $$Props['absolute'] = undefined
	export let dismissible: $$Props['dismissible'] = undefined
	export let show: $$Props['show'] = undefined
	export let persistent: $$Props['persistent'] = undefined
	export let placement: $$Props['placement'] = 'top'
	export let scrollable: $$Props['scrollable'] = undefined
	export let size: $$Props['size'] = 'md'
	export let title: $$Props['title'] = undefined

	export const close = (force = false) => {
		if (!force && persistent) return
		show = false
		dispatch('close')
	}

	$: if (typeof window !== 'undefined' && !absolute) {
		if (show) {
			document.body.classList.add(classname('body-modal-show') ?? '')
		} else {
			if (document.body.classList.contains(classname('body-modal-show') ?? '')) {
				document.body.classList.remove(classname('body-modal-show') ?? '')
			}
		}
	}

	const onClickContent = (e: any) => {
		e.stopPropagation()
	}

	let cssProps: $$Props = {}
	$: cssProps = {
		placement,
		scrollable,
		size,
		absolute,
	}
</script>

<El
	{...$$restProps}
	{componentName}
	{cssProps}
	on:click={() => close()}
	tabindex="0"
	role="dialog"
	{show}>
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
					<Button
						aria-label="X"
						type="button"
						componentName="{componentName}-close"
						on:click={() => close()} />
				{/if}
			</slot>
		</El>
	</El>
</El>
{#if backdrop}
	<El componentName="{componentName}-backdrop" cssProps={{ absolute }} {show} />
{/if}
