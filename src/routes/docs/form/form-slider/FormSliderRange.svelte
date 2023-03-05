<script lang="ts">
	import { FormSlider, SliderKnob } from 'yesvelte'

	let value: number = 300
</script>

<FormSlider
	hint="choose a value between 0 and 1000"
	state="invalid"
	connect
	min={0}
	max={1000}
	step={100}>
	<SliderKnob bind:value />
</FormSlider>

<i>value: {value}</i>
