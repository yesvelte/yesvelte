<script>
	import { Page, Doc, Preview } from '$components'
	import SliderColor from './SliderColor.svelte'
	import SliderConnect from './SliderConnect.svelte'
	import SliderDefault from './SliderDefault.svelte'
	import SliderMultipleKnobs from './SliderMultipleKnobs.svelte'
	import SliderRange from './SliderRange.svelte'
	import SliderTwoKnobs from './SliderTwoKnobs.svelte'
	import SliderTwoKnobsConnected from './SliderTwoKnobsConnected.svelte'
	import SliderVertical from './SliderVertical.svelte'
</script>

<Page
	title="Sliders"
	description="Sliders are used to select numbers from a limited range of values.">
	<Doc title="Default">
		<Preview src="./SliderDefault.svelte">
			<SliderDefault />
		</Preview>
	</Doc>

	<Doc title="Connect">
		<Preview src="./SliderConnect.svelte">
			<SliderConnect />
		</Preview>
	</Doc>

	<Doc title="with two Knobs">
		<Preview src="./SliderTwoKnobs.svelte">
			<SliderTwoKnobs />
		</Preview>
	</Doc>

	<Doc title="with two Knobs Connected">
		<Preview src="./SliderTwoKnobsConnected.svelte">
			<SliderTwoKnobsConnected />
		</Preview>
	</Doc>
	<Doc title="with Multiple Knobs">
		<Preview src="./SliderMultipleKnobs.svelte">
			<SliderMultipleKnobs />
		</Preview>
	</Doc>
	<Doc title="Range & Steps">
		<Preview src="./SliderRange.svelte">
			<SliderRange />
		</Preview>
	</Doc>
	<Doc title="Colors">
		<Preview src="./SliderColor.svelte">
			<SliderColor />
		</Preview>
	</Doc>

	<Doc title="Vertical">
		<Preview src="./SliderVertical.svelte">
			<div class="custom-class">
				<SliderVertical />
			</div>
		</Preview>
	</Doc>
</Page>

<style>
	:global(.custom-class) {
		height: 400px;
	}
</style>
