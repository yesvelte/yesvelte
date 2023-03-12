<script>
	import { Page, Doc, Preview } from '$components'
	import FormSliderColor from './FormSliderColor.svelte'
	import FormSliderConnect from './FormSliderConnect.svelte'
	import FormSliderDefault from './FormSliderDefault.svelte'
	import FormSliderMultipleKnobs from './FormSliderMultipleKnobs.svelte'
	import FormSliderRange from './FormSliderRange.svelte'
	import FormSliderTwoKnobs from './FormSliderTwoKnobs.svelte'
	import FormSliderTwoKnobsConnected from './FormSliderTwoKnobsConnected.svelte'
	import FormSliderWithForm from './FormSliderWithForm.svelte'
</script>

<Page
	title="FormSliders"
	description="FormSliders are used to select numbers from a limited range of values.">
	<Doc title="Default">
		<Preview src="./FormSliderDefault.svelte">
			<FormSliderDefault />
		</Preview>
	</Doc>

	<Doc title="Connect">
		<Preview src="./FormSliderConnect.svelte">
			<FormSliderConnect />
		</Preview>
	</Doc>

	<Doc title="with two Knobs">
		<Preview src="./FormSliderTwoKnobs.svelte">
			<FormSliderTwoKnobs />
		</Preview>
	</Doc>

	<Doc title="with two Knobs Connected">
		<Preview src="./FormSliderTwoKnobsConnected.svelte">
			<FormSliderTwoKnobsConnected />
		</Preview>
	</Doc>
	<Doc title="with Multiple Knobs">
		<Preview src="./FormSliderMultipleKnobs.svelte">
			<FormSliderMultipleKnobs />
		</Preview>
	</Doc>
	<Doc title="Range & Steps">
		<Preview src="./FormSliderRange.svelte">
			<FormSliderRange />
		</Preview>
	</Doc>
	<Doc title="Colors">
		<Preview src="./FormSliderColor.svelte">
			<FormSliderColor />
		</Preview>
	</Doc>

	<Doc title="With Form">
		<Preview src="./FormSliderWithForm.svelte">
			<FormSliderWithForm />
		</Preview>
	</Doc>
</Page>
