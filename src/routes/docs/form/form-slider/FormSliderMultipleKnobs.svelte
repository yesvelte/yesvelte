<script lang="ts">
	import { FormSlider, SliderKnob } from 'yesvelte'

	let value1 = 10
	let value2 = 20
	let value3 = 30
	let value4 = 40
	let value5 = 50
	let value6 = 60
</script>

<FormSlider label="Choose ranges">
	<SliderKnob connect bind:value={value1} />
	<SliderKnob bind:value={value2} />
	<SliderKnob connect bind:value={value3} />
	<SliderKnob bind:value={value4} />
	<SliderKnob connect bind:value={value5} />
	<SliderKnob bind:value={value6} />
</FormSlider>

<i>Selected ranges ({value1} - {value2}), ({value3} - {value4}), ({value5} - {value6})</i>
