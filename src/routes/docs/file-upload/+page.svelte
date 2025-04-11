<script>
	import { Page, Doc, Preview } from '$components'

	import FileUploadDefault from './FileUploadDefault.svelte'
	import FileUploadDisabled from './FileUploadDisabled.svelte'
	import FileUploadAccept from './FileUploadAccept.svelte'
	import FileUploadMultiple from './FileUploadMultiple.svelte'
	import FileUploadSizes from './FileUploadSizes.svelte'
	import FileUploadValue from './FileUploadValue.svelte'
	import FileUploadEvents from './FileUploadEvents.svelte'
	import FileUploadValidation from './FileUploadValidation.svelte'
	import FileUploadIcons from './FileUploadIcons.svelte'
</script>

<Page title="File Upload">
	{#snippet description()}
		FileUpload component is used for collecting files from local device of user.
	{/snippet}

	<Doc title="Default">
		<Preview src="./FileUploadDefault.svelte">
			<FileUploadDefault />
		</Preview>
	</Doc>

	<Doc title="Sizes">
		{#snippet description()}Use size prop to change size of FileUpload input.{/snippet}
		<Preview src="./FileUploadSizes.svelte">
			<FileUploadSizes />
		</Preview>
	</Doc>

	<Doc title="Disabled">
		{#snippet description()}Set FileUpload disabled.{/snippet}
		<Preview src="./FileUploadDisabled.svelte">
			<FileUploadDisabled />
		</Preview>
	</Doc>

	<Doc title="Events">
		<Preview src="./FileUploadEvents.svelte">
			<FileUploadEvents />
		</Preview>
	</Doc>

	<Doc title="Icons">
		<Preview src="./FileUploadIcons.svelte">
			<FileUploadIcons />
		</Preview>
	</Doc>

	<Doc title="Accept">
		{#snippet description()}You can set file types which are allowed to select.{/snippet}
		<Preview src="./FileUploadAccept.svelte">
			<FileUploadAccept />
		</Preview>
	</Doc>

	<Doc title="Multiple">
		{#snippet description()}Allows User to select multiple files.{/snippet}
		<Preview src="./FileUploadMultiple.svelte">
			<FileUploadMultiple />
		</Preview>
	</Doc>

	<Doc title="Validation">
		<Preview src="./FileUploadValidation.svelte">
			<FileUploadValidation />
		</Preview>
	</Doc>

	<Doc title="Value">
		{#snippet description()}You can get selected files using bind:value{/snippet}
		<Preview src="./FileUploadValue.svelte">
			<FileUploadValue />
		</Preview>
	</Doc>
</Page>
