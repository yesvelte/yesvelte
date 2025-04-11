<script lang="ts">
	import { Slider } from '../slider'
	import type { FormSliderProps } from './Form.types'
	import FormField from './FormField.svelte'

	type $$Props = FormSliderProps

	let {
		componentName = 'form-slider',
		tag = 'input',
		required,
		color,
		connect,
		min,
		max,
		step,
		state,
		label,
		hint,
		name,
		children,
		labelSnippet,
		hintSnippet,
		...restProps
	}: $$Props = $props()

	let props: $$Props = $derived({
		...restProps,
		labelSnippet,
		hintSnippet,
		required,
		label,
		hint,
		state,
		componentName,
	})

	let sliderProps: $$Props = $derived({
		tag,
		required,
		state,
		color,
		connect,
		min,
		max,
		step,
		name,
	})
</script>

<FormField {...props}>
	<Slider {...sliderProps}>
		<slot />
	</Slider>
</FormField>
