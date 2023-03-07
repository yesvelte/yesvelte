<script lang="ts">
	import El from '$lib/el/El.svelte'
	import { FormField, Slider, SliderKnob } from 'yesvelte'

	let value1 = 10
	let value2 = 20
	let value3 = 30
	let value4 = 40
	let value5 = 50
	let value6 = 60
</script>

<FormField label="Choose ranges">
	<Slider>
		<SliderKnob connect bind:value={value1} />
		<SliderKnob bind:value={value2} />
		<SliderKnob connect bind:value={value3} />
		<SliderKnob bind:value={value4} />
		<SliderKnob connect bind:value={value5} />
		<SliderKnob bind:value={value6} />
	</Slider>
</FormField>

<i>Selected ranges ({value1} - {value2}), ({value3} - {value4}), ({value5} - {value6})</i>
