<script>
	import { Page, Doc, Preview } from '$components'

	import InputGroupDefault from './InputGroupDefault.svelte'
	import InputGroupSizes from './InputGroupSizes.svelte'
	import InputGroupCheckboxes from './InputGroupCheckboxes.svelte'
	import InputGroupMultipleAddons from './InputGroupMultipleAddons.svelte'
	import InputGroupButtonAddons from './InputGroupButtonAddons.svelte'
	import InputGroupIcons from './InputGroupIcons.svelte'
</script>

<Page title="Input group">
	<Doc title="Basic example">
		{#snippet description()}
			Place one add-on or button on either side of an input. You may also place one on both sides of
			an input.
		{/snippet}
		<Preview src="./InputGroupDefault.svelte">
			<div class="custom-class"><InputGroupDefault /></div>
		</Preview>
	</Doc>

	<Doc title="Sizing">
		{#snippet description()}Set size property for input to be applied to input and its add-ons.{/snippet}
		<Preview src="./InputGroupSizes.svelte">
			<div class="custom-class"><InputGroupSizes /></div>
		</Preview>
	</Doc>

	<Doc title="Checkboxes and radios">
		{#snippet description()}
			Place any checkbox or radio option within an input group’s addon instead of text.
		{/snippet}
		<Preview src="./InputGroupCheckboxes.svelte">
			<div class="custom-class"><InputGroupCheckboxes /></div>
		</Preview>
	</Doc>

	<Doc title="Multiple addons">
		{#snippet description()}
			Multiple add-ons are supported and can be mixed with checkbox and radio input versions.
		{/snippet}
		<Preview src="./InputGroupMultipleAddons.svelte">
			<div class="custom-class"><InputGroupMultipleAddons /></div>
		</Preview>
	</Doc>

	<Doc title="Button addons">
		<Preview src="./InputGroupButtonAddons.svelte">
			<div class="custom-class"><InputGroupButtonAddons /></div>
		</Preview>
	</Doc>

	<Doc title="Icon">
		{#snippet description()}
			Add icons to your input to suggest users what they should enter or inform them of the current
			state of a form element.
		{/snippet}
		<Preview src="./InputGroupIcons.svelte">
			<div class="custom-class"><InputGroupIcons /></div>
		</Preview>
	</Doc>
</Page>

<style>
	.custom-class > :global(.y-input-wrapper) {
		margin: 0.25rem 0;
	}
</style>
