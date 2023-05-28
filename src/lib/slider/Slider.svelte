<script lang="ts">
	import { onDestroy, setContext } from 'svelte'
	import { onMount } from 'svelte'
	import noUiSlider, { type Options, type API as NoUiSlider } from 'nouislider'
	import { writable } from 'svelte/store'
	import type { SliderKnobType, SliderProps } from './Slider.types'
	import { classname } from '../internal'
	import { get_current_component } from 'svelte/internal'
	import { El } from '../el'

	type $$Props = SliderProps

	export let componentName: $$Props['componentName'] = 'slider'
	export let color: $$Props['color'] = undefined
	export let min: $$Props['min'] = undefined
	export let max: $$Props['max'] = undefined
	export let step: $$Props['step'] = undefined
	export let name: $$Props['name'] = undefined
	export let connect: $$Props['connect'] = undefined

	const components = [
		{ component: get_current_component(), except: [] },
		...($$props.components ?? []),
	]

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
			cssPrefix: '',
			cssClasses: {
				active: classname(componentName + '-active')!,
				background: classname(componentName + '-background')!,
				base: classname(componentName + '-base')!,
				connect: classname(componentName + '-connect')!,
				connects: classname(componentName + '-connects')!,
				drag: classname(componentName + '-drag')!,
				draggable: classname(componentName + '-draggable')!,
				handle: classname(componentName + '-handle')!,
				handleLower: classname(componentName + '-handle-lower')!,
				handleUpper: classname(componentName + '-handle-upper')!,
				horizontal: classname(componentName + '-horizontal')!,
				ltr: classname(componentName + '-ltr')!,
				marker: classname(componentName + '-marker')!,
				markerHorizontal: classname(componentName + '-marker-horizontal')!,
				markerLarge: classname(componentName + '-marker-large')!,
				markerNormal: classname(componentName + '-marker-normal')!,
				markerSub: classname(componentName + '-marker-sub')!,
				markerVertical: classname(componentName + '-marker-vertical')!,
				origin: classname(componentName + '-origin')!,
				pips: classname(componentName + '-pips')!,
				pipsHorizontal: classname(componentName + '-pips-horizontal')!,
				pipsVertical: classname(componentName + '-pips-vertical')!,
				rtl: classname(componentName + '-rtl')!,
				tap: classname(componentName + '-tap')!,
				target: classname(componentName + '-target')!,
				textDirectionLtr: classname(componentName + '-text-direction-ltr')!,
				tooltip: classname(componentName + '-tooltip')!,
				textDirectionRtl: classname(componentName + '-text-direction-rtl')!,
				touchArea: classname(componentName + '-touchArea')!,
				value: classname(componentName + '-value')!,
				valueHorizontal: classname(componentName + '-value-horizontal')!,
				valueLarge: classname(componentName + '-value-large')!,
				valueNormal: classname(componentName + '-value-normal')!,
				valueSub: classname(componentName + '-value-sub')!,
				valueVertical: classname(componentName + '-value-vertical')!,
				vertical: classname(componentName + '-vertical')!,
			},
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

<El {components} componentName="{componentName}-wrapper">
	<div class={classname('slider', { color })} bind:this={element} />
	<slot />
</El>
