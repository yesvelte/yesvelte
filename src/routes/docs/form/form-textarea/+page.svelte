<script>
	import { Page, Doc, Preview } from '$components'
	import FormTextareaLayout from './FormTextareaLayout.svelte'
	import FormTextareaDefault from './FormTextareaDefault.svelte'
	import FormTextareaHint from './FormTextareaHint.svelte'
	import FormTextareaState from './FormTextareaState.svelte'
</script>

<Page title="FormTextarea">
	<p slot="description">
		FormTextarea is a textarea component for forms. It is a wrapper around textarea element with
		some additional features.
	</p>

	<Doc title="Label">
		<Preview src="./FormTextareaDefault.svelte">
			<FormTextareaDefault />
		</Preview>
	</Doc>

	<Doc title="Hint">
		<p slot="description">
			Set <code>hint</code> string property to show some useful information about the input. You can
			also use
			<code>hint</code> slot.
		</p>
		<Preview src="./FormTextareaHint.svelte">
			<FormTextareaHint />
		</Preview>
	</Doc>

	<Doc title="State">
		<Preview src="./FormTextareaState.svelte">
			<FormTextareaState />
		</Preview>
	</Doc>

	<Doc title="Layout">
		<Preview src="./FormTextareaLayout.svelte">
			<FormTextareaLayout />
		</Preview>
	</Doc>
</Page>
