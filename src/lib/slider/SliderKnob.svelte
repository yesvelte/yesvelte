<!-- @css:slider -->
<script lang="ts">
	import { getContext, onDestroy, onMount } from 'svelte'
	import type { SliderContext, SliderKnobProps, SliderKnobType } from './Slider.types'
	import { get_current_component } from 'svelte/internal'
	import { El } from '../el'

	type $$Props = SliderKnobProps

	export let value: $$Props['value'] = 0
	export let connect: $$Props['connect'] = false
	export let tooltip: $$Props['tooltip'] = false
	export let name: $$Props['name'] = undefined

	const components = [
		{ component: get_current_component(), except: [] },
		...($$props.components ?? []),
	]

	const { register, unregister, values, setValue } = getContext<SliderContext>('SLIDER')

	let id: number | undefined = undefined

	onMount(() => {
		const knob: SliderKnobType = { connect: connect!, value: value!, tooltip: tooltip! }
		id = register(knob)
	})

	onDestroy(() => {
		if (!id) return
		unregister(id)
	})

	const isDefined = (value: any) => typeof value !== 'undefined'

	$: if (isDefined(id) && isDefined($values[id!])) {
		value = $values[id!]
	}

	$: if (isDefined(id) && isDefined(value)) {
		setValue(id!, value!)
	}
</script>

<El tag="input" type="hidden" {components} {name} {value} />
