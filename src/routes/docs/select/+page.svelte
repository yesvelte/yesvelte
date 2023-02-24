<script>
	import { Page, Doc, Preview } from '$components'
	import SelectDefault from './SelectDefault.svelte'
	import SelectItems from './SelectItems.svelte'
	import SelectPlaceholder from './SelectPlaceholder.svelte'
	import SelectSizes from './SelectSizes.svelte'
	import SelectDisabled from './SelectDisabled.svelte'
	import SelectStates from './SelectStates.svelte'
</script>

<Page
	title="Select"
	description="Select component is used to let users choose from a predefined set of options.">
	<Doc title="Default">
		<Preview src="./SelectDefault.svelte">
			<div class="custom-class"><SelectDefault /></div>
		</Preview>
	</Doc>

	<Doc title="Items">
		<Preview src="./SelectItems.svelte">
			<div class="custom-class"><SelectItems /></div>
		</Preview>
	</Doc>

	<Doc title="Placeholder">
		<Preview src="./SelectPlaceholder.svelte">
			<div class="custom-class"><SelectPlaceholder /></div>
		</Preview>
	</Doc>

	<Doc title="Sizes">
		<Preview src="./SelectSizes.svelte">
			<div class="custom-class"><SelectSizes /></div>
		</Preview>
	</Doc>

	<Doc title="Disabled">
		<Preview src="./SelectDisabled.svelte">
			<div class="custom-class"><SelectDisabled /></div>
		</Preview>
	</Doc>

	<Doc title="States">
		<Preview src="./SelectStates.svelte">
			<div class="custom-class"><SelectStates /></div>
		</Preview>
	</Doc>
</Page>

<style>
	.custom-class > :global(.u-select) {
		margin: 0.25rem 0;
	}
</style>
