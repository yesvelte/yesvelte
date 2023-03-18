<script>
	import { Page, Doc, Preview } from '$components'
	import FormCheckboxDefault from './FormCheckboxDefault.svelte'
	import FormCheckboxColumn from './FormCheckboxColumn.svelte'
	import FormCheckboxDescription from './FormCheckboxDescription.svelte'
	import FormCheckboxReverse from './FormCheckboxReverse.svelte'
	import FormCheckboxRequired from './FormCheckboxRequired.svelte'
	import FormCheckboxEvents from './FormCheckboxEvents.svelte'
</script>

<Page title="FormCheckbox">
	<Doc title="Label">
		<Preview src="./FormCheckboxDefault.svelte">
			<FormCheckboxDefault />
		</Preview>
	</Doc>

	<Doc title="Required">
		<Preview src="./FormCheckboxRequired.svelte">
			<FormCheckboxRequired />
		</Preview>
	</Doc>

	<Doc title="Description">
		<Preview src="./FormCheckboxDescription.svelte">
			<FormCheckboxDescription />
		</Preview>
	</Doc>

	<Doc title="Events">
		<Preview src="./FormCheckboxEvents.svelte">
			<FormCheckboxEvents />
		</Preview>
	</Doc>

	<Doc title="Reverse">
		<Preview src="./FormCheckboxReverse.svelte">
			<FormCheckboxReverse />
		</Preview>
	</Doc>

	<Doc title="Layout">
		<p slot="description">
			You can set Column width of FormCheckbox using <code>row</code> and <code>col</code> props.
		</p>
		<Preview src="./FormCheckboxColumn.svelte">
			<FormCheckboxColumn />
		</Preview>
	</Doc>
</Page>
