<script lang="ts">
	import { Slider, SliderKnob } from 'yesvelte'

	let value: number = 30
</script>

<Slider color="red" connect>
	<SliderKnob bind:value />
</Slider>

<Slider color="green" connect>
	<SliderKnob bind:value />
</Slider>

<Slider color="blue" connect>
	<SliderKnob bind:value />
</Slider>

<Slider color="warning" connect>
	<SliderKnob bind:value />
</Slider>

<i>value: {value}</i>
