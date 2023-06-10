<!-- @!css:form-slider -->
<script lang="ts">
	import { Slider } from '../slider'
	import type { FormSliderProps } from './Form.types'
	import FormField from './FormField.svelte'

	import { get_current_component } from 'svelte/internal'

	type $$Props = FormSliderProps

	export let componentName: $$Props['componentName'] = 'form-input'
	export let tag: $$Props['tag'] = 'input'
	export let required: $$Props['required'] = undefined
	export let color: $$Props['color'] = undefined
	export let connect: $$Props['connect'] = undefined
	export let min: $$Props['min'] = undefined
	export let max: $$Props['max'] = undefined
	export let step: $$Props['step'] = undefined
	export let state: $$Props['state'] = undefined
	export let label: $$Props['label'] = undefined
	export let hint: $$Props['hint'] = undefined
	export let name: $$Props['name'] = undefined

	const components = [
		{ component: get_current_component(), except: [] },
		...($$props.components ?? []),
	]

	let props: $$Props = {}
	let sliderProps: $$Props = {}

	$: props = {
		required,
		label,
		hint,
		state,
		componentName,
	}

	$: sliderProps = {
		tag,
		required,
		state,
		color,
		connect,
		min,
		max,
		step,
		name,
	}
</script>

<!-- @css:form-field -->


<FormField {...props} {...$$restProps}>
	<slot name="label" />
	<Slider {components} {...sliderProps}>
		<slot />
	</Slider>
	<slot name="hint" />
</FormField>
