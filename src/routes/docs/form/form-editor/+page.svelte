<script>
	import { Page, Doc, Preview } from '$components'
	import FormEditorChange from './FormEditorChange.svelte'
	import FormEditorCustomToolbar from './FormEditorCustomToolbar.svelte'

	import FormEditorDefault from './FormEditorDefault.svelte'
	import FormEditorLayout from './FormEditorLayout.svelte'
	import FormEditorPlaceholder from './FormEditorPlaceholder.svelte'
	import FormEditorReadonly from './FormEditorReadonly.svelte'
	import FormEditorState from './FormEditorState.svelte'
</script>

<Page title="FormEditor">
	<Doc title="Default">
		<Preview src="./FormEditorDefault.svelte">
			<FormEditorDefault />
		</Preview>
	</Doc>
	<Doc title="Placeholder">
		<Preview src="./FormEditorPlaceholder.svelte">
			<FormEditorPlaceholder />
		</Preview>
	</Doc>
	<Doc title="Readonly">
		<Preview src="./FormEditorReadonly.svelte">
			<FormEditorReadonly />
		</Preview>
	</Doc>
	<Doc title="Change Event">
		<Preview src="./FormEditorChange.svelte">
			<FormEditorChange />
		</Preview>
	</Doc>
	<Doc title="Custom Toolbar">
		<p slot="description">
			To customize toolbar items you may need to read <a
				href="https://quilljs.com/docs/modules/toolbar/">Quilljs documentation</a> about all toolbar
			options.
		</p>
		<Preview src="./FormEditorCustomToolbar.svelte">
			<FormEditorCustomToolbar />
		</Preview>
	</Doc>
	<Doc title="Hint & State">
		<Preview src="./FormEditorState.svelte">
			<FormEditorState />
		</Preview>
	</Doc>

	<Doc title="Layout example">
		<Preview src="./FormEditorLayout.svelte">
			<FormEditorLayout />
		</Preview>
	</Doc>
</Page>
