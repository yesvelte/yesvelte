<script>
	import { Page, Doc, Preview } from '$components'
	import TextareaDefault from './TextareaDefault.svelte'
	import TextareaRowCol from './TextareaRowCol.svelte'
	import TextareaDisabled from './TextareaDisabled.svelte'
	import TextareaReadonly from './TextareaReadonly.svelte'
	import TextareaPlaceholder from './TextareaPlaceholder.svelte'
	import TextareaSizes from './TextareaSizes.svelte'
	import TextareaBorderShapes from './TextareaBorderShapes.svelte'
</script>

<Page
	title="Textarea"
	description="Textarea components are used for collecting user provided information (multi-line Input).">
	<Doc title="Default">
		<Preview src="./TextareaDefault.svelte">
			<div class="custom-class">
				<TextareaDefault />
			</div>
		</Preview>
	</Doc>

	<Doc title="Rows">
		<p slot="description">
			You can set number of rows for Textarea using <code>rows</code> props.
		</p>
		<Preview src="./TextareaRowCol.svelte">
			<div class="custom-class">
				<TextareaRowCol />
			</div>
		</Preview>
	</Doc>

	<Doc title="Sizing">
		<Preview src="./TextareaSizes.svelte">
			<div class="custom-class">
				<TextareaSizes />
			</div>
		</Preview>
	</Doc>

	<Doc title="Disabled">
		<Preview src="./TextareaDisabled.svelte">
			<div class="custom-class">
				<TextareaDisabled />
			</div>
		</Preview>
	</Doc>

	<Doc title="Read-Only">
		<Preview src="./TextareaReadonly.svelte">
			<div class="custom-class">
				<TextareaReadonly />
			</div>
		</Preview>
	</Doc>

	<Doc title="Placeholder">
		<Preview src="./TextareaPlaceholder.svelte">
			<div class="custom-class">
				<TextareaPlaceholder />
			</div>
		</Preview>
	</Doc>

	<Doc title="Borders">
		<Preview src="./TextareaBorderShapes.svelte">
			<div class="custom-class">
				<TextareaBorderShapes />
			</div>
		</Preview>
	</Doc>
</Page>

<style>
	.custom-class > :global(.u-textarea-wrapper) {
		margin: 0.25rem 0;
	}
</style>
