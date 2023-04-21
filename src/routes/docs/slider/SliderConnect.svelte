<script lang="ts">
	import { Slider, SliderKnob } from 'yesvelte'

	let value: number = 30
</script>

<Slider connect>
	<SliderKnob bind:value />
</Slider>

<Slider>
	<SliderKnob connect bind:value />
</Slider>

<i>value: {value}</i>
