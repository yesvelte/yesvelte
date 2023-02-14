<script>
	import { Page, Doc, Preview } from '$components'
	import FieldsetDefault from './FieldsetDefault.svelte'
</script>

<Page
	title="Fieldset"
	description="Group parts of your form to make it well-structured and clearer for users, using the Fieldset element.">
	<Doc title="Defaults" description="A simple usage">
		<Preview src="./FieldsetDefault.svelte">
			<FieldsetDefault />
		</Preview>
	</Doc>
</Page>
