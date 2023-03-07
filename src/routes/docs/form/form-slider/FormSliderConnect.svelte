<script lang="ts">
	import El from '$lib/el/El.svelte'
	import { FormSlider, SliderKnob } from 'yesvelte'

	let value: number = 30
</script>

<FormSlider connect>
	<SliderKnob bind:value />
</FormSlider>

<FormSlider>
	<SliderKnob connect bind:value />
</FormSlider>

<i>value: {value}</i>
