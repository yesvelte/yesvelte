<script>
	import { Page, Doc, Preview } from '$components'
	import FormTextareaLayout from './FormTextareaLayout.svelte'
	import FormTextareaDefault from './FormTextareaDefault.svelte'
	import FormTextareaHint from './FormTextareaHint.svelte'
	import FormTextareaState from './FormTextareaState.svelte'
	import FormTextareaEvents from './FormTextareaEvents.svelte'
	import FormTextareaValidation from './FormTextareaValidation.svelte'
	import FormTextareaIcon from './FormTextareaIcon.svelte'
	import FormTextareaSlots from './FormTextareaSlots.svelte'
</script>

<Page title="FormTextarea">
	{#snippet description()}
		FormTextarea is a textarea component for forms. It is a wrapper around textarea element with
		some additional features.
	{/snippet}

	<Doc title="Label">
		<Preview src="./FormTextareaDefault.svelte">
			<FormTextareaDefault />
		</Preview>
	</Doc>

	<Doc title="Hint">
		{#snippet description()}
			Set <code>hint</code> string property to show some useful information about the input. You can
			also use
			<code>hint</code> slot.
		{/snippet}
		<Preview src="./FormTextareaHint.svelte">
			<FormTextareaHint />
		</Preview>
	</Doc>

	<Doc title="Events">
		<Preview src="./FormTextareaEvents.svelte">
			<FormTextareaEvents />
		</Preview>
	</Doc>

	<Doc title="With Icon">
		<Preview src="./FormTextareaIcon.svelte">
			<FormTextareaIcon />
		</Preview>
	</Doc>
	<Doc title="Slots">
		<Preview src="./FormTextareaSlots.svelte">
			<FormTextareaSlots />
		</Preview>
	</Doc>

	<Doc title="Validation">
		<Preview src="./FormTextareaValidation.svelte">
			<FormTextareaValidation />
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
