<script lang="ts">
	import { FormSlider, SliderKnob } from 'yesvelte'

	let value: number = 30
</script>

<FormSlider label="Red" color="red" connect>
	<SliderKnob bind:value />
</FormSlider>

<FormSlider label="Green" color="green" connect>
	<SliderKnob bind:value />
</FormSlider>

<FormSlider label="Blue" color="blue" connect>
	<SliderKnob bind:value />
</FormSlider>

<FormSlider label="Warning" color="warning" connect>
	<SliderKnob bind:value />
</FormSlider>

<i>value: {value}</i>
