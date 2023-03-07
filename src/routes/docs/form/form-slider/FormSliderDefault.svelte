<script lang="ts">
	import { FormSlider, SliderKnob } from 'yesvelte'

	let value: number = 30
</script>

<!-- default range is from 0 to 100 -->
<FormSlider label="Choose a value">
	<SliderKnob bind:value />
</FormSlider>

<i>value: {value}</i>
