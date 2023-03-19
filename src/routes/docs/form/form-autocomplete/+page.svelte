<script>
	import { Page, Doc, Preview } from '$components'
	import FormAutocompleteColumn from './FormAutocompleteColumn.svelte'
	import FormAutocompleteDisabled from './FormAutocompleteDisabled.svelte'
	import FormAutocompleteEvents from './FormAutocompleteEvents.svelte'
	import FormAutocompleteKey from './FormAutocompleteKey.svelte'
	import FormAutocompleteLabel from './FormAutocompleteLabel.svelte'
	import FormAutocompleteMessage from './FormAutocompleteMessage.svelte'
	import FormAutocompleteObject from './FormAutocompleteObject.svelte'
	import FormAutocompletePlaceholder from './FormAutocompletePlaceholder.svelte'
	import FormAutocompleteRequired from './FormAutocompleteRequired.svelte'
	import FormAutocompleteSizes from './FormAutocompleteSizes.svelte'
	import FormAutocompleteStates from './FormAutocompleteStates.svelte'
</script>

<Page title="FormAutocomplete">
	<p slot="description">
		FormAutocomplete supports all props and events of <a href="/docs/components/autocompletes"
			>Autocomplete</a> and also have some additional features
	</p>

	<Doc title="Label">
		<Preview src="./FormAutocompleteLabel.svelte">
			<FormAutocompleteLabel />
		</Preview>
	</Doc>

	<Doc title="Disabled">
		<Preview src="./FormAutocompleteDisabled.svelte">
			<FormAutocompleteDisabled />
		</Preview>
	</Doc>

	<Doc title="Placeholder">
		<Preview src="./FormAutocompletePlaceholder.svelte">
			<FormAutocompletePlaceholder />
		</Preview>
	</Doc>

	<Doc title="Size">
		<Preview src="./FormAutocompleteSizes.svelte">
			<FormAutocompleteSizes />
		</Preview>
	</Doc>

	<Doc title="Complex Items">
		<p slot="description">
			You can have complex objects as item and you need to use <code>itemKey</code> and
			<code>itemValue</code>
			props to extract the data that Autocomplete needs
		</p>
		<Preview src="./FormAutocompleteObject.svelte">
			<FormAutocompleteObject />
		</Preview>
	</Doc>

	<Doc title="State">
		<p slot="description">
			You can set the <code>valid</code> or <code>invalid</code> boolean properties to apply the valid
			or invalid state to a Autocomplete.
		</p>
		<Preview src="./FormAutocompleteStates.svelte">
			<FormAutocompleteStates />
		</Preview>
	</Doc>

	<!-- <Doc title="Events">
		<p slot="description">FormAutocomplete only supports <code>changed</code> event.</p>
		<Preview src="./FormAutocompleteEvents.svelte">
			<FormAutocompleteEvents />
		</Preview>
	</Doc> -->

	<Doc
		title="Hint/Validation Message"
		description="You can set a message below of Autocomplete like this">
		<Preview src="./FormAutocompleteMessage.svelte">
			<FormAutocompleteMessage />
		</Preview>
	</Doc>

	<Doc title="Layout">
		<p slot="description">
			You can set width of each Form elements in a form using <code>col</code> prop.
		</p>
		<Preview src="./FormAutocompleteColumn.svelte">
			<FormAutocompleteColumn />
		</Preview>
	</Doc>

	<Doc title="Required" description="You can mark it as a required field like this.">
		<Preview src="./FormAutocompleteRequired.svelte">
			<FormAutocompleteRequired />
		</Preview>
	</Doc>

	<Doc title="Custom Key">
		<Preview src="./FormAutocompleteKey.svelte">
			<FormAutocompleteKey />
		</Preview>
	</Doc>
</Page>
