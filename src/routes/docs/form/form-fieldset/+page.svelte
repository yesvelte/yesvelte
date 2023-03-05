<script>
	import { Page, Doc, Preview } from '$components'
	import FieldsetDefault from './FieldsetDefault.svelte'
	import FieldsetExample from './FieldsetExample.svelte'
</script>

<Page
	title="Fieldset"
	description="Group parts of your form to make it well-structured and clearer for users, using the Fieldset element.">
	<Doc title="Default">
		<Preview src="./FieldsetDefault.svelte">
			<FieldsetDefault />
		</Preview>
	</Doc>
	<Doc title="Layout" description="A simple usage using form comonents">
		<Preview src="./FieldsetExample.svelte">
			<FieldsetExample />
		</Preview>
	</Doc>
</Page>
