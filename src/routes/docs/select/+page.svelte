<script>
	import { Page, Doc, Preview } from '$components'
	import SelectDefault from './SelectDefault.svelte'
	import SelectItems from './SelectItems.svelte'
	import SelectItemsBind from './SelectItemsBind.svelte'
	import SelectPlaceholder from './SelectPlaceholder.svelte'
	import SelectSizes from './SelectSizes.svelte'
	import SelectDisabled from './SelectDisabled.svelte'
	import SelectStates from './SelectStates.svelte'
	import SelectEvents from './SelectEvents.svelte'
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

	<Doc title="Bind Item">
		<Preview src="./SelectItemsBind.svelte">
			<div class="custom-class"><SelectItemsBind /></div>
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

	<Doc title="Events">
		<Preview src="./SelectEvents.svelte">
			<div class="custom-class"><SelectEvents /></div>
		</Preview>
	</Doc>

	<Doc title="States">
		<Preview src="./SelectStates.svelte">
			<div class="custom-class"><SelectStates /></div>
		</Preview>
	</Doc>
</Page>

<style>
	.custom-class > :global(.y-select) {
		margin: 0.25rem 0;
	}
</style>
