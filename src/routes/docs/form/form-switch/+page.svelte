<script>
	import { Page, Doc, Preview } from '$components'
	import FormSwitchDefault from './FormSwitchDefault.svelte'
	import FormSwitchColumn from './FormSwitchColumn.svelte'
	import FormSwitchDescription from './FormSwitchDescription.svelte'
	import FormSwitchReverse from './FormSwitchReverse.svelte'
	import FormSwitchRequired from './FormSwitchRequired.svelte'
</script>

<Page title="FormSwitch">
	<p slot="description">
		<code>FormSwitch</code> component supports all props and events of
		<a href="/docs/switch">Switch</a>
		and also have some additional features like <code>label</code>, <code>hint</code>,
		<code>required</code>,
		<code>cols</code>, etc. to make it easy to use in a form.
	</p>

	<Doc title="Label">
		<Preview src="./FormSwitchDefault.svelte">
			<FormSwitchDefault />
		</Preview>
	</Doc>

	<Doc title="Required">
		<Preview src="./FormSwitchRequired.svelte">
			<FormSwitchRequired />
		</Preview>
	</Doc>

	<Doc title="Description">
		<Preview src="./FormSwitchDescription.svelte">
			<FormSwitchDescription />
		</Preview>
	</Doc>

	<Doc title="Reverse">
		<Preview src="./FormSwitchReverse.svelte">
			<FormSwitchReverse />
		</Preview>
	</Doc>

	<Doc title="Layout">
		<Preview src="./FormSwitchColumn.svelte">
			<FormSwitchColumn />
		</Preview>
	</Doc>
</Page>
