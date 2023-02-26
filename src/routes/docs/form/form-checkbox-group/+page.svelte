<script>
	import { Page, Doc, Preview } from '$components'
	import FormCheckboxGroupBasic from './FormCheckboxGroupBasic.svelte'
	import FormCheckboxGroupLabel from './FormCheckboxGroupLabel.svelte'
	import FormCheckboxGroupColor from './FormCheckboxGroupColor.svelte'
	import FormCheckboxGroupArrayBinding from './FormCheckboxGroupArrayBinding.svelte'
	import FormCheckboxGroupInline from './FormCheckboxGroupInline.svelte'
	import FormCheckboxGroupLayout from './FormCheckboxGroupLayout.svelte'
</script>

<Page title="FormCheckboxGroup">
	<p slot="description">
		FormCheckboxGroup is similar to <a href="/docs/checkbox-group">CheckboxGroup</a> component with decoration
		features inside the form.
	</p>

	<Doc title="Basic usage">
		<Preview src="./FormCheckboxGroupBasic.svelte">
			<FormCheckboxGroupBasic />
		</Preview>
	</Doc>

	<Doc title="Custom label">
		<Preview src="./FormCheckboxGroupLabel.svelte">
			<FormCheckboxGroupLabel />
		</Preview>
	</Doc>

	<Doc title="Color">
		<Preview src="./FormCheckboxGroupColor.svelte">
			<FormCheckboxGroupColor />
		</Preview>
	</Doc>

	<Doc title="Inline">
		<Preview src="./FormCheckboxGroupInline.svelte">
			<FormCheckboxGroupInline />
		</Preview>
	</Doc>

	<Doc title="Binding">
		<Preview src="./FormCheckboxGroupArrayBinding.svelte">
			<FormCheckboxGroupArrayBinding />
		</Preview>
	</Doc>

	<Doc title="Layout">
		<p slot="description">
			You can use <code>row</code> and <code>col</code> properties to change layout of the
			<code>FormCheckboxes</code> inside forms.
		</p>
		<Preview src="./FormCheckboxGroupLayout.svelte">
			<FormCheckboxGroupLayout />
		</Preview>
	</Doc>
</Page>
