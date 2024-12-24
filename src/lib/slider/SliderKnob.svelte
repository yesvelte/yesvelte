<script lang="ts">
	import { getContext, onDestroy, onMount } from 'svelte'
	import type { SliderContext, SliderKnobProps, SliderKnobType } from './Slider.types'

	import { El } from '../el'

	type $$Props = SliderKnobProps

	let {
		value = $bindable(0),
		connect = false,
		tooltip = false,
		name,
		...restProps
	}: $$Props = $props()

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

	$effect(() => {
		if (isDefined(id) && isDefined($values[id!])) {
			value = $values[id!]
		}
	})

	$effect(() => {
		if (isDefined(id) && isDefined(value)) {
			setValue(id!, value!)
		}
	})
</script>

<El {...restProps} tag="input" type="hidden" {name} {value} />
