<script lang="ts">
	import { Slider, SliderKnob } from 'yesvelte'

	let value: number = 30
</script>

<!-- default range is from 0 to 100 -->
<Slider>
	<SliderKnob bind:value />
</Slider>

<i>value: {value}</i>
