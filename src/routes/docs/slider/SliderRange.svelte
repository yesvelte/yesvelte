<script lang="ts">
	import { Slider, SliderKnob } from 'yesvelte'

	let value: number = 300
</script>

<Slider connect min={0} max={1000} step={100}>
	<SliderKnob bind:value />
</Slider>

<i>value: {value}</i>
