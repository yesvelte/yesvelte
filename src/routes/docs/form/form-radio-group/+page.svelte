<script>
	import { Page, Doc, Preview } from '$components'
	import FormRadioGroupBasic from './FormRadioGroupBasic.svelte'
	import FormRadioGroupLabel from './FormRadioGroupLabel.svelte'
	import FormRadioGroupColor from './FormRadioGroupColor.svelte'
	import FormRadioGroupArrayBinding from './FormRadioGroupArrayBinding.svelte'
	import FormRadioGroupInline from './FormRadioGroupInline.svelte'
	import FormRadioGroupReverse from './FormRadioGroupReverse.svelte'
	import FormRadioGroupKey from './FormRadioGroupKey.svelte'
</script>

<Page title="FormRadioGroup">
	<Doc title="Usage">
		<Preview src="./FormRadioGroupBasic.svelte">
			<FormRadioGroupBasic />
		</Preview>
	</Doc>

	<Doc title="Label">
		<Preview src="./FormRadioGroupLabel.svelte">
			<FormRadioGroupLabel />
		</Preview>
	</Doc>

	<Doc title="Key">
		<Preview src="./FormRadioGroupKey.svelte">
			<FormRadioGroupKey />
		</Preview>
	</Doc>

	<Doc title="Color">
		<Preview src="./FormRadioGroupColor.svelte">
			<FormRadioGroupColor />
		</Preview>
	</Doc>

	<Doc title="Inline">
		<Preview src="./FormRadioGroupInline.svelte">
			<FormRadioGroupInline />
		</Preview>
	</Doc>

	<Doc title="Reverse">
		<Preview src="./FormRadioGroupReverse.svelte">
			<FormRadioGroupReverse />
		</Preview>
	</Doc>

	<Doc title="Binding">
		<p slot="description">
			Set an array of objects to <code>items</code> property and define <code>label</code>.
		</p>

		<Preview src="./FormRadioGroupArrayBinding.svelte">
			<FormRadioGroupArrayBinding />
		</Preview>
	</Doc>
</Page>
