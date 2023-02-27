<script>
	import { Page, Doc, Preview } from '$components'
	import SpinnerColors from './SpinnerColors.svelte'
	import SpinnerSizes from './SpinnerSizes.svelte'
	import SpinnerGrow from './SpinnerGrow.svelte'
</script>

<Page title="Spinners" description="Spinners are used to indicate loading state.">
	<Doc title="Color">
		<Preview src="./SpinnerColors.svelte">
			<SpinnerColors />
		</Preview>
	</Doc>
	<Doc title="Sizes">
		<Preview src="./SpinnerSizes.svelte">
			<SpinnerSizes />
		</Preview>
	</Doc>

	<Doc title="Grow">
		<Preview src="./SpinnerGrow.svelte">
			<SpinnerGrow />
		</Preview>
	</Doc>
</Page>
