<script lang="ts">
	import { El, FormSlider, Slider, SliderKnob } from 'yesvelte'

	let value: number = 30
</script>

<El h="100" gap="4" d="flex">
	<FormSlider label="red" color="red" connect vertical>
		<SliderKnob bind:value />
	</FormSlider>
	<FormSlider label="green" color="green" connect vertical>
		<SliderKnob bind:value />
	</FormSlider>
	<FormSlider label="yellow" color="yellow" connect vertical>
		<SliderKnob bind:value />
	</FormSlider>
</El>

<i>value: {value}</i>
