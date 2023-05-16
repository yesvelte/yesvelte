// @ts-nocheck

import { bubble, listen, prevent_default, stop_propagation } from 'svelte/internal'
import { getContext, setContext } from 'svelte'

const MODIFIER_DIVIDER = '!'

const MODIFIER_REGEX = new RegExp(
	`^[^${MODIFIER_DIVIDER}]+(?:${MODIFIER_DIVIDER}(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$`
)

const CONTEXT_KEY = 'TODO'

export function forwardEventsRegister(component) {
	setContext(CONTEXT_KEY, [component, ...(getContext(CONTEXT_KEY) || [])])
}

export function forwardEventsBuilderNext() {
	const components = getContext(CONTEXT_KEY) || []

	const instances = new Map()

	for (const component of components) {
		const events = []

		const destructors = []

		const forwardDestructors = {}

		const destroy = () => {
			Object.values(forwardDestructors)
				.concat(destructors)
				.forEach((destructor) => destructor())
		}

		const forward = (event) => {
			bubble(component, event)
		}

		instances.set(component, {
			$on: undefined,
			events,
			destructors,
			forwardDestructors,
			forward,
			destroy,
		})

		component.$on = (event, callback) => {
			let destructor

			const $on = instances.get(component).$on

			if ($on) {
				destructor = $on(event, callback)
			} else {
				events.push([event, callback])
			}

			return () => {
				destructor?.()
			}
		}
	}

	return (node) => {
		instances.forEach((value, component) => {
			const { destructors, events, forward, forwardDestructors } = value

			value.$on = (event, callback) => {
				let handler = callback

				let options = false

				if (event.match(MODIFIER_REGEX)) {
					options = Object.fromEntries(
						event
							.split(MODIFIER_DIVIDER)
							.slice(1)
							.map((modifier) => [modifier, true])
					)

					options.passive = options.nonpassive ? true : options.passive

					if (options.preventDefault) {
						handler = prevent_default(handler)
					}

					if (options.stopPropagation) {
						handler = stop_propagation(handler)
					}
				}

				event = event.split(MODIFIER_DIVIDER)[0]

				const destructor = () => {
					off()

					const index = destructors.indexOf(destructor)

					if (index == -1) return

					destructors.splice(index, 1)
				}

				const off = listen(node, event, handler, options)

				destructors.push(destructor)

				if (!(event in forwardDestructors)) {
					forwardDestructors[event] = listen(node, event, forward)
				}

				return destructor
			}

			for (let i = 0; i < events.length; i++) {
				value.$on(events[i][0], events[i][1])
			}
		})

		return {
			destroy: () => {
				instances.forEach((value) => value.destroy())
			},
		}
	}
}
