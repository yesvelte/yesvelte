import { writable } from 'svelte/store'
import { classname } from './classname'

function getAnimateClass(componentName: string, state: boolean | undefined) {
	if (typeof state === 'undefined') return ''

	return classname(componentName, { show: state })?.split(' ')[1]
}

export function createAnimationStore({
	element,
	componentName,
	show: initialShow,
}: {
	element: HTMLElement
	componentName: string | undefined
	show: boolean | undefined
}) {
	if (typeof window === 'undefined') return
	let styles = getComputedStyle(element)

	let showConfig = styles.getPropertyValue('--show-config').trim() ?? 'default'

	let state = typeof initialShow !== 'undefined' ? (initialShow ? 'opened' : 'closed') : undefined
	let animateTimeout: NodeJS.Timer

	let classes = ' ' + getAnimateClass(componentName, state)

	const { subscribe, set } = writable({ classes, styles: '' })

	function change(newState: string) {
		clearTimeout(animateTimeout)
		state = newState

		let classes = ' ' + getAnimateClass(componentName, state)
		let styles = ''

		if (showConfig === 'height') {
			if (['open', 'closing'].includes(state)) {
				styles = `max-height: 0;`
			}

			if (['opening', 'close'].includes(state)) {
				styles = `max-height: ${element!.scrollHeight}px;`
			}

			if (['opened', 'closed'].includes(state)) {
				styles = ``
			}
		}

		set({ styles, classes })
	}

	function duration() {
		try {
			const style = window.getComputedStyle(element!)

			const duration = [
				style.animationDelay,
				style.transitionDelay,
				style.animationDuration,
				style.transitionDuration,
			].map((item = '0s') => parseFloat(item) * (/ms/g.test(item) ? 1 : 1000))

			return Math.max(...duration.slice(0, 2)) + Math.max(...duration.slice(2))
		} catch {
			return 0
		}
	}

	function next(callback: Function) {
		requestAnimationFrame(() => setTimeout(callback))
	}

	function enter() {
		if (state === 'opened') return
		next(() => {
			change('open')

			next(() => {
				change('opening')

				next(() => {
					animateTimeout = setTimeout(() => {
						initialShow = undefined
						change('opened')
					}, duration())
				})
			})
		})
	}

	function leave() {
		if (state === 'closed') return
		next(() => {
			change('close')

			next(() => {
				change('closing')

				next(() => {
					animateTimeout = setTimeout(() => {
						initialShow = undefined
						change('closed')
					}, duration())
				})
			})
		})
	}

	return {
		enter,
		leave,
		subscribe,
	}
}
