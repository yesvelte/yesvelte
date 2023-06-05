<script>
	import { Page, Doc, Preview } from '$components'
	import FormFileUploadLayout from './FormFileUploadLayout.svelte'
	import FormFileUploadDefault from './FormFileUploadDefault.svelte'
	import FormFileUploadHint from './FormFileUploadHint.svelte'
	import FormFileUploadEvents from './FormFileUploadEvents.svelte'
	import FormFileUploadValidation from './FormFileUploadValidation.svelte'
	import FormFileUploadIcon from './FormFileUploadIcon.svelte'
</script>

<Page title="FormFileUpload">
	<p slot="description">
		FormFileUpload is a wrapper around FileUploader component which can be used insisde forms. It
		supports all props and events of
		<a href="/docs/file-upload">FileUpload</a>
		and also have some additional features.
	</p>

	<Doc title="Label">
		<p slot="description">
			Set <code>label</code> property to show FileUpload label's and bind to its id automatically.
			<code>required</code> is a boolean property which show an indicator on label as well. You can
			also use
			<code>label</code> slot.
		</p>
		<Preview src="./FormFileUploadDefault.svelte">
			<FormFileUploadDefault />
		</Preview>

		<Doc title="Hint">
			<p slot="description">
				Set <code>hint</code> string property to show some useful information about the FileUpload.
				You can also use
				<code>hint</code> slot.
			</p>
			<Preview src="./FormFileUploadHint.svelte">
				<FormFileUploadHint />
			</Preview>
		</Doc>

		<Doc title="Validation">
			<Preview src="./FormFileUploadValidation.svelte">
				<FormFileUploadValidation />
			</Preview>
		</Doc>

		<Doc title="With Icon">
			<Preview src="./FormFileUploadIcon.svelte">
				<FormFileUploadIcon />
			</Preview>
		</Doc>

		<Doc title="Events">
			<Preview src="./FormFileUploadEvents.svelte">
				<FormFileUploadEvents />
			</Preview>
		</Doc>

		<Doc title="Layout">
			<p slot="description">
				Use default <code>row</code> and <code>col</code> properties to change layout of the FormFileUploads
				inside forms.
			</p>
			<Preview src="./FormFileUploadLayout.svelte">
				<FormFileUploadLayout />
			</Preview>
		</Doc>
	</Doc>
</Page>
