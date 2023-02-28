<script>
	import { Page, Doc, Preview } from '$components'

	import FileUploadDefault from './FileUploadDefault.svelte'
	import FileUploadDisabled from './FileUploadDisabled.svelte'
	import FileUploadAccept from './FileUploadAccept.svelte'
	import FileUploadMultiple from './FileUploadMultiple.svelte'
	import FileUploadSizes from './FileUploadSizes.svelte'
	import FileUploadValue from './FileUploadValue.svelte'
</script>

<Page title="File Upload">
	<p slot="description">
		FileUpload component is used for collecting files from local device of user.
	</p>

	<Doc title="Default">
		<Preview src="./FileUploadDefault.svelte">
			<FileUploadDefault />
		</Preview>
	</Doc>

	<Doc title="Sizes">
		<p slot="description">Use size prop to change size of FileUpload input.</p>
		<Preview src="./FileUploadSizes.svelte">
			<FileUploadSizes />
		</Preview>
	</Doc>

	<Doc title="Disabled">
		<p slot="description">Set FileUpload disabled.</p>
		<Preview src="./FileUploadDisabled.svelte">
			<FileUploadDisabled />
		</Preview>
	</Doc>

	<Doc title="Accept">
		<p slot="description">You can set file types which are allowed to select.</p>
		<Preview src="./FileUploadAccept.svelte">
			<FileUploadAccept />
		</Preview>
	</Doc>

	<Doc title="Multiple">
		<p slot="description">Allows User to select multiple files.</p>
		<Preview src="./FileUploadMultiple.svelte">
			<FileUploadMultiple />
		</Preview>
	</Doc>

	<Doc title="Value">
		<p slot="description">You can get selected files using bind:value</p>
		<Preview src="./FileUploadValue.svelte">
			<FileUploadValue />
		</Preview>
	</Doc>
</Page>
