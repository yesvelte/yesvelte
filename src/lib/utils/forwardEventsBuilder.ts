import type { SvelteComponent } from 'svelte'
import { listen, prevent_default, stop_propagation } from 'svelte/internal'

type EventCallback = (event: any) => void

type EventDestructor = () => void

const regex = /^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/

// TODO: experimental global event handler
const handler = (detail: any) => {
	document.dispatchEvent(new CustomEvent('UBEAC:EVENTS', { detail }))
}

export const forwardEventsBuilder = (component: SvelteComponent) => {
	const natives: { [key: string]: EventCallback[] } = {}

	component.$on = (eventType: string, callback: EventCallback) => {
		const isNative = `on${eventType}`.split(':')[0]!.toLowerCase() in document

		if (isNative) {
			const callbacks = natives[eventType] || (natives[eventType] = [])
			callbacks.push(callback)
			return () => {}
		}

		const callbacks = (component.$$.callbacks[eventType] ??= [])

		// TODO: experimental global event handler
		const cb = callback
		callback = (event) => {
			handler(event)
			return cb(event)
		}

		callbacks.push(callback)

		return () => {
			const index = callbacks.indexOf(callback)
			if (index == -1) return
			callbacks.splice(index, 1)
		}
	}

	return (node: HTMLElement | SVGElement) => {
		const eventTypes = Object.keys(natives)

		const destructors: EventDestructor[] = []

		for (let eventType of eventTypes) {
			const callbacks = natives[eventType]

			for (let callback of callbacks) {
				let options: AddEventListenerOptions | boolean = false

				if (eventType.match(regex)) {
					const parts = eventType.split(':')

					eventType = parts[0]

					const eventOptions = Object.fromEntries(parts.slice(1).map((mod) => [mod, true]))

					if (eventOptions.passive) {
						options = options || {}
						options.passive = true
					}

					if (eventOptions.nonpassive) {
						options = options || {}
						options.passive = false
					}

					if (eventOptions.capture) {
						options = options || {}
						options.capture = true
					}

					if (eventOptions.once) {
						options = options || {}
						options.once = true
					}

					if (eventOptions.preventDefault) {
						callback = prevent_default(callback)
					}

					if (eventOptions.stopPropagation) {
						callback = stop_propagation(callback)
					}
				}

				const destructor = listen(node, eventType, callback, options)

				// TODO: experimental global event handler
				const mirror = listen(node, eventType, handler, options)

				destructors.push(destructor, mirror)
			}
		}

		const destroy = () => destructors.forEach((destructor) => destructor())

		return { destroy }
	}
}
