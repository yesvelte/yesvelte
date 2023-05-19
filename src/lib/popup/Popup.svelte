<script lang="ts">
	import { El } from '../el'
	import { get_current_component } from 'svelte/internal'
	import { classname } from '../internal'
	import {
		computePosition,
		type Placement,
		offset as offsetMiddleware,
		shift as shiftMiddleware,
		flip as flipMiddleware,
		arrow as arrowMiddleware,
	} from '@floating-ui/dom'
	import type { PopupProps } from './Popup.types'

	type $$Props = PopupProps

	export let target: $$Props['target'] = undefined
	export let placement: $$Props['placement'] = undefined
	export let trigger: $$Props['trigger'] = undefined
	export let popupOffset: $$Props['popupOffset'] = undefined
	export let autoClose: $$Props['autoClose'] = 'outside'
	export let arrow: $$Props['arrow'] = undefined
	export let componentName: $$Props['componentName'] = 'popup'
	export let show: $$Props['show'] = undefined

	const components = [get_current_component(), ...($$props.components ?? [])]

	let popupEl: HTMLElement
	let targetEl: Element
	let arrowEl: HTMLElement

	let arrowPlacement: Placement | undefined = undefined
	let arrowX: string | undefined = undefined
	let arrowY: string | undefined = undefined

	let prevTarget: Element

	let left: string = ''
	let top: string = ''

	function showPopup() {
		show = true

		let middleware = []

		if (popupOffset) {
			middleware.push(offsetMiddleware(popupOffset))
		}

		middleware.push(
			shiftMiddleware({
				padding: popupOffset,
			})
		)

		middleware.push(flipMiddleware())

		if (arrow) {
			middleware.push(
				arrowMiddleware({
					element: arrowEl,
				})
			)
		}

		computePosition(targetEl, popupEl, {
			placement,
			middleware,
		}).then(({ x, y, ...rest }) => {
			left = `${x}px`
			top = `${y}px`

			if (arrow) {
				arrowPlacement = rest.placement.split('-')[0]! as Placement
				const arrowData: any = rest.middlewareData.arrow

				if (arrowData) {
					arrowX = arrowData.x ? `${arrowData.x}px` : ''
					arrowY = arrowData.y ? `${arrowData.y}px` : ''
				}
			}
		})
	}

	function hidePopup() {
		show = false
	}

	const togglePopup = () => {
		show ? hidePopup() : showPopup()
	}

	function onOutside(event: Event) {
		if (!show) return
		if (autoClose === true || autoClose === 'outside') {
			if (event.composedPath().some((path) => path == popupEl || path == targetEl)) {
				return
			}
			show = false
		}
	}

	function onClickPopup() {
		if (autoClose === true || autoClose === 'inside') {
			show = false
		}
	}

	function getTargetEl(target: HTMLElement | string | undefined): Element {
		if (!target) {
			return popupEl.previousElementSibling || popupEl.parentElement!
		} else if (typeof target === 'string') {
			return document.querySelector(target) || popupEl.parentElement!
		} else {
			return target
		}
	}

	async function bind() {
		if (window) {
			// this code is to prevent error in Svelte REPL
			window.process = { env: { NODE_ENV: 'production' } }
		}

		prevTarget = targetEl

		if (typeof window !== 'undefined') document.addEventListener('click', onOutside)

		popupEl?.addEventListener('click', onClickPopup)

		if (trigger === 'click') targetEl?.addEventListener('click', togglePopup)

		if (trigger === 'hover') {
			targetEl?.addEventListener('mouseenter', showPopup)
			targetEl?.addEventListener('mouseleave', hidePopup)
		}
		if (trigger === 'focus') {
			targetEl?.addEventListener('focus', showPopup)
			targetEl?.addEventListener('blur', hidePopup)
		}
	}

	function unbind() {
		if (prevTarget) {
			if (trigger === 'click') prevTarget.removeEventListener('click', togglePopup)

			if (typeof window !== 'undefined') document.removeEventListener('click', onOutside)
			popupEl?.removeEventListener('click', onClickPopup)

			if (trigger === 'hover') {
				prevTarget.removeEventListener('mouseenter', showPopup)
				prevTarget.removeEventListener('mouseleave', hidePopup)
			}
			if (trigger === 'focus') {
				prevTarget.removeEventListener('focus', showPopup)
				prevTarget.removeEventListener('blur', hidePopup)
			}
		}
	}

	$: if (popupEl) targetEl = getTargetEl(target)

	$: if (targetEl) {
		unbind()
		bind()
	}

	$: popupProps = {
		componentName,
		class: classname(
			'popup',
			{
				show,
				arrowPlacement,
			},
			$$props.class
		),
		style: `left: ${left}; top: ${top};`,
	}

	$: arrowProps = {
		componentName: componentName + '-arrow',
		class: classname('popup-arrow'),
		style: `left: ${arrowX}; top: ${arrowY}`,
	}
</script>

<El {components} bind:element={popupEl} {...$$restProps} {...popupProps}>
	{#if arrow}
		<El bind:element={arrowEl} {...arrowProps} />
	{/if}
	<slot />
</El>
