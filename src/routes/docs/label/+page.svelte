<script>
	import { Page, Doc, Preview } from '$components'
	import LabelDefault from './LabelDefault.svelte'
	import LabelFor from './LabelFor.svelte'
	import LabelRequired from './LabelRequired.svelte'
</script>

<h1>Label</h1>
<p>Label component is used to set a name or some identifier for Form Elements.</p>

<Page
	title="Label"
	description="Label component is used to set a name or some identifier for Form Elements.
">
	<Doc title="Default Markup">
		<Preview src="./LabelDefault.svelte">
			<LabelDefault />
		</Preview>
	</Doc>

	<Doc title="For">
		<p slot="description">
			<code>for</code> property is used to connect Label with Form Elements.
		</p>
		<Preview src="./LabelFor.svelte">
			<LabelFor />
		</Preview>
	</Doc>

	<Doc title="Required">
		<p slot="description">
			<code>required</code> property is used to show a required Mark after the label text.
		</p>
		<Preview src="./LabelRequired.svelte">
			<LabelRequired />
		</Preview>
	</Doc>
</Page>
