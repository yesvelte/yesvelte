<script lang="ts">
	import { FormSlider, SliderKnob } from 'yesvelte'

	let minPrice: number = 30
	let maxPrice: number = 70
</script>

<FormSlider label="Choose Price range">
	<SliderKnob bind:value={minPrice} />
	<SliderKnob bind:value={maxPrice} />
</FormSlider>

<i>Search Products in this range ({'$'}{minPrice} - {'$'}{maxPrice})</i>
