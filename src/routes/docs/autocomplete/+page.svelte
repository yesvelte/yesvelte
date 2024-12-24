<script>
	import { Page, Doc, Preview } from '$components'

	import AutocompleteDefault from './AutocompleteDefault.svelte'
	import AutocompleteDisabled from './AutocompleteDisabled.svelte'
	import AutocompleteEvents from './AutocompleteEvents.svelte'
	import AutocompleteKey from './AutocompleteKey.svelte'
	import AutocompleteObject from './AutocompleteObject.svelte'
	import AutocompletePlaceholder from './AutocompletePlaceholder.svelte'
	import AutocompleteSizes from './AutocompleteSizes.svelte'
	import AutocompleteStates from './AutocompleteStates.svelte'
	import AutocompleteAvatar from './AutocompleteAvatar.svelte'
	import AutocompleteFlags from './AutocompleteFlags.svelte'
	import AutocompleteOnInput from './AutocompleteOnInput.svelte'
	import AutocompleteMultiple from './AutocompleteMultiple.svelte'
	import AutocompleteDismissible from './AutocompleteDismissible.svelte'
	import AutocompleteMultipleKey from './AutocompleteMultipleKey.svelte'
	import AutocompleteCreate from './AutocompleteCreate.svelte'
	import AutocompleteCreateMultiple from './AutocompleteCreateMultiple.svelte'
	import AutocompleteCreateKey from './AutocompleteCreateKey.svelte'
</script>

<Page title="Autocomplete">
	{#snippet description()}
		Autocomplete is a component that allows you to search and select a value from a list of options.
		It is a combination of a text input and a dropdown menu.
	{/snippet}
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

	<Doc title="Events">
		{#snippet description()}
			Autocomplete supports <code>changed</code> and <code>input</code> events.
		{/snippet}
		<Preview src="./AutocompleteEvents.svelte">
			<AutocompleteEvents />
		</Preview>
	</Doc>

	<Doc title="Input Event">
		<Preview src="./AutocompleteOnInput.svelte">
			<AutocompleteOnInput />
		</Preview>
	</Doc>

	<Doc title="Size">
		<Preview src="./AutocompleteSizes.svelte">
			<div class="custom-class"><AutocompleteSizes /></div>
		</Preview>
	</Doc>
	<Doc title="Multiple">
		<Preview src="./AutocompleteMultiple.svelte">
			<div class="custom-class"><AutocompleteMultiple /></div>
		</Preview>
	</Doc>

	<Doc title="Dismissible">
		<Preview src="./AutocompleteDismissible.svelte">
			<div class="custom-class"><AutocompleteDismissible /></div>
		</Preview>
	</Doc>

	<Doc title="Complex Items">
		{#snippet description()}
			You can have complex objects as item and using <code>key</code> prop you can extract the data that
			You need from Autocomplete.
		{/snippet}
		<Preview src="./AutocompleteObject.svelte">
			<AutocompleteObject />
		</Preview>
	</Doc>

	<Doc title="States">
		{#snippet description()}
			You can set the <code>valid</code> or <code>invalid</code> boolean properties to apply the valid
			or invalid state to a Autocomplete.
		{/snippet}
		<Preview src="./AutocompleteStates.svelte">
			<div class="custom-class"><AutocompleteStates /></div>
		</Preview>
	</Doc>

	<Doc title="Custom Key">
		{#snippet description()}
			You can use <code>key</code> prop to set a custom key for the input element.
		{/snippet}
		<Preview src="./AutocompleteKey.svelte">
			<div class="custom-class">
				<AutocompleteKey />
			</div>
		</Preview>
	</Doc>

	<Doc title="Custom Key (multiple)">
		<Preview src="./AutocompleteMultipleKey.svelte">
			<div class="custom-class">
				<AutocompleteMultipleKey />
			</div>
		</Preview>
	</Doc>

	<Doc title="Create Item">
		<Preview src="./AutocompleteCreate.svelte">
			<div class="custom-class">
				<AutocompleteCreate />
			</div>
		</Preview>
	</Doc>

	<Doc title="Create Item (multiple)">
		<Preview src="./AutocompleteCreateMultiple.svelte">
			<div class="custom-class">
				<AutocompleteCreateMultiple />
			</div>
		</Preview>
	</Doc>

	<Doc title="Create Item (key)">
		<Preview src="./AutocompleteCreateKey.svelte">
			<div class="custom-class">
				<AutocompleteCreateKey />
			</div>
		</Preview>
	</Doc>

	<Doc title="With Avatar">
		{#snippet description()}You can use any component inside Autocomplete like this:{/snippet}
		<Preview src="./AutocompleteAvatar.svelte">
			<div class="custom-class">
				<AutocompleteAvatar />
			</div>
		</Preview>
	</Doc>
	<Doc title="Custom Options">
		<Preview src="./AutocompleteFlags.svelte">
			<div class="custom-class">
				<AutocompleteFlags />
			</div>
		</Preview>
	</Doc>
</Page>

<style>
	.custom-class > :global(.y-autocomplete) {
		margin: 0.25rem 0;
	}
</style>
