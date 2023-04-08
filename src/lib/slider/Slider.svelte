<script lang="ts">
	import { onDestroy, setContext } from 'svelte'
	import { onMount } from 'svelte'
	import noUiSlider, { type Options, type API as NoUiSlider } from 'nouislider'
	import { writable } from 'svelte/store'
	import type { SliderKnobType, SliderProps } from './Slider.types'
	import { classname } from '$lib/internal'

	type $$Props = SliderProps

	export let color: $$Props['color'] = undefined
	export let min: $$Props['min'] = undefined
	export let max: $$Props['max'] = undefined
	export let step: $$Props['step'] = undefined
	export let name: $$Props['name'] = undefined
	export let connect: $$Props['connect'] = undefined

	// name has no usage in this component....

	let knobs: SliderKnobType[] = []
	let element: HTMLElement
	let instance: NoUiSlider

	function register(knob: any) {
		const id = knobs.length
		knobs = [...knobs, knob]

		$values[id] = knob.value
		return id
	}

	function unregister(id: number) {
		knobs = knobs.filter((_, index) => index !== id)
	}

	const values = writable<number[] | string[]>([])

	onMount(() => {
		if (!element) return

		if (name) element.setAttribute('name', name)

		const options: Options = {
			start: knobs.map((knob) => knob.value),
			tooltips: knobs.map((knob) => knob.tooltip ?? false),
			connect: [connect ?? false, ...knobs.map((knob) => knob.connect ?? false)],
			step,
			// cssClasses, TODO: update class names and scss file.
			range: {
				min: min ?? 0,
				max: max ?? 100,
			},
		}

		instance = noUiSlider.create(element, options)

		instance.on('update', (newValues, handle) => {
			$values[handle] = +newValues[handle]
		})
	})

	onDestroy(() => {
		if (instance) {
			instance.destroy()
		}
	})

	function setValue(id: number, newValue: number) {
		instance.setHandle(id, newValue)
	}

	setContext('SLIDER', { register, unregister, setValue, values })
</script>

<div class={classname('slider', { color })} bind:this={element} />
<slot />
