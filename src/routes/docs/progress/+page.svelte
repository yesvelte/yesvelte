<script>
	import { Page, Doc, Preview } from '$components'
	import ProgressDefault from './ProgressDefault.svelte'
	import ProgressIndeterminate from './ProgressIndeterminate.svelte'
	import ProgressColors from './ProgressColors.svelte'
	import ProgressSizes from './ProgressSizes.svelte'
	import ProgressStriped from './ProgressStriped.svelte'
	import ProgressStripedAnimated from './ProgressStripedAnimated.svelte'
	import ProgressLabel from './ProgressLabel.svelte'
</script>

<Page
	title="Progress bar"
	description="Progress bars are used to provide feedback on an action status and inform users of the current progress.">
	<Doc title="Default">
		<Preview src="./ProgressDefault.svelte">
			<div class="custom-class"><ProgressDefault /></div>
		</Preview>
	</Doc>

	<Doc title="Color">
		<Preview src="./ProgressColors.svelte">
			<div class="custom-class">
				<ProgressColors />
			</div>
		</Preview>
	</Doc>

	<Doc title="Size">
		<Preview src="./ProgressSizes.svelte">
			<div class="custom-class"><ProgressSizes /></div>
		</Preview>
	</Doc>

	<Doc title="Indeterminate">
		<Preview src="./ProgressIndeterminate.svelte">
			<div class="custom-class"><ProgressIndeterminate /></div>
		</Preview>
	</Doc>

	<Doc title="Striped">
		<Preview src="./ProgressStriped.svelte">
			<div class="custom-class"><ProgressStriped /></div>
		</Preview>
	</Doc>

	<Doc title="Animated striped">
		<Preview src="./ProgressStripedAnimated.svelte">
			<div class="custom-class"><ProgressStripedAnimated /></div>
		</Preview>
	</Doc>

	<Doc title="Label">
		<Preview src="./ProgressLabel.svelte">
			<div class="custom-class"><ProgressLabel /></div>
		</Preview>
	</Doc>
</Page>

<style>
	.custom-class > :global(.u-progress) {
		margin: 0.25rem 0;
	}
</style>
