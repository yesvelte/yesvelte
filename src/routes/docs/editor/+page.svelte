<script>
	import { Page, Doc, Preview } from '$components'
	import EditorChange from './EditorChange.svelte'
	import EditorCustomToolbar from './EditorCustomToolbar.svelte'

	import EditorDefault from './EditorDefault.svelte'
	import EditorPlaceholder from './EditorPlaceholder.svelte'
	import EditorReadonly from './EditorReadonly.svelte'
</script>

<Page title="Editor">
	<Doc title="Default">
		<Preview src="./EditorDefault.svelte">
			<EditorDefault />
		</Preview>
	</Doc>
	<Doc title="Placeholder">
		<Preview src="./EditorPlaceholder.svelte">
			<EditorPlaceholder />
		</Preview>
	</Doc>
	<Doc title="Readonly">
		<Preview src="./EditorReadonly.svelte">
			<EditorReadonly />
		</Preview>
	</Doc>
	<Doc title="Change Event">
		<Preview src="./EditorChange.svelte">
			<EditorChange />
		</Preview>
	</Doc>
	<Doc title="Custom Toolbar">
		<p slot="description">
			To customize toolbar items you may need to read <a
				href="https://quilljs.com/docs/modules/toolbar/">Quilljs documentation</a> about all toolbar
			options.
		</p>
		<Preview src="./EditorCustomToolbar.svelte">
			<EditorCustomToolbar />
		</Preview>
	</Doc>
</Page>
