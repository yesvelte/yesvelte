<script>
	import { Page, Doc, Preview } from '$components'
	import DotAnimations from './DotAnimations.svelte'
	import DotColors from './DotColors.svelte'
	import DotDefault from './DotDefault.svelte'
	import DotIndicators from './DotIndicators.svelte'
</script>

<Page
	title="Dot"
	description="Dots are particularly useful if you want to make an interface element more noticeable.">
	<Doc title="Default">
		<Preview src="./DotDefault.svelte">
			<DotDefault />
		</Preview>
	</Doc>
	<Doc title="Colors">
		<Preview src="./DotColors.svelte">
			<DotColors />
		</Preview>
	</Doc>
	<Doc title="Animations">
		<Preview src="./DotAnimations.svelte">
			<DotAnimations />
		</Preview>
	</Doc>
	<Doc title="Indicators">
		<Preview src="./DotIndicators.svelte">
			<DotIndicators />
		</Preview>
	</Doc>
</Page>
