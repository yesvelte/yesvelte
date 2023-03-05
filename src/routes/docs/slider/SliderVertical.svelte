<script lang="ts">
	import { El, Slider, SliderKnob } from 'yesvelte'

	let value: number = 30
</script>

<El h="100" gap="4" d="flex">
	<Slider color="red" connect vertical>
		<SliderKnob bind:value />
	</Slider>
	<Slider color="green" connect vertical>
		<SliderKnob bind:value />
	</Slider>
	<Slider color="yellow" connect vertical>
		<SliderKnob bind:value />
	</Slider>
</El>

<i>value: {value}</i>
