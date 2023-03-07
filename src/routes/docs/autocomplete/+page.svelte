<script>
	import { Page, Doc, Preview } from '$components'

	import AutocompleteDefault from './AutocompleteDefault.svelte'
	import AutocompleteDisabled from './AutocompleteDisabled.svelte'
	import AutocompleteKey from './AutocompleteKey.svelte'
	import AutocompleteObject from './AutocompleteObject.svelte'
	import AutocompletePlaceholder from './AutocompletePlaceholder.svelte'
	import AutocompleteSizes from './AutocompleteSizes.svelte'
	import AutocompleteStates from './AutocompleteStates.svelte'
</script>

<Page title="Autocomplete">
	<p slot="description">
		Autocomplete is a component that allows you to search and select a value from a list of options.
		It is a combination of a text input and a dropdown menu.
	</p>
	<Doc title="Default">
		<Preview src="./AutocompleteDefault.svelte">
			<AutocompleteDefault />
		</Preview>
	</Doc>

	<Doc title="Disabled">
		<Preview src="./AutocompleteDisabled.svelte">
			<AutocompleteDisabled />
		</Preview>
	</Doc>

	<Doc title="Placeholder">
		<Preview src="./AutocompletePlaceholder.svelte">
			<AutocompletePlaceholder />
		</Preview>
	</Doc>

	<Doc title="Size">
		<Preview src="./AutocompleteSizes.svelte">
			<div class="custom-class"><AutocompleteSizes /></div>
		</Preview>
	</Doc>

	<Doc title="Complex Items">
		<p slot="description">
			You can have complex objects as item and you need to use <code>itemKey</code> and
			<code>itemValue</code> props to extract the data that Autocomplete needs.
		</p>
		<Preview src="./AutocompleteObject.svelte">
			<AutocompleteObject />
		</Preview>
	</Doc>

	<Doc title="States">
		<p slot="description">
			You can set the <code>valid</code> or <code>invalid</code> boolean properties to apply the valid
			or invalid state to a Autocomplete.
		</p>
		<Preview src="./AutocompleteStates.svelte">
			<div class="custom-class"><AutocompleteStates /></div>
		</Preview>
	</Doc>

	<Doc title="Custom Key">
		<p slot="description">
			You can use <code>key</code> prop to set a custom key for the input element.
		</p>
		<Preview src="./AutocompleteKey.svelte">
			<AutocompleteKey />
		</Preview>
	</Doc>
</Page>

<style>
	.custom-class > :global(.y-autocomplete) {
		margin: 0.25rem 0;
	}
</style>
