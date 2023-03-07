<script lang="ts">
	import { FormField, Slider, SliderKnob } from 'yesvelte'

	let value1 = 10
	let value2 = 30
	let value3 = 50
	let value4 = 80
</script>

<FormField label="Choose ranges">
	<Slider>
		<SliderKnob tooltip connect bind:value={value1} />
		<SliderKnob tooltip bind:value={value2} />
		<SliderKnob tooltip connect bind:value={value3} />
		<SliderKnob bind:value={value4} />
	</Slider>
</FormField>

<i>Selected ranges ({value1} - {value2}), ({value3} - {value4})</i>
