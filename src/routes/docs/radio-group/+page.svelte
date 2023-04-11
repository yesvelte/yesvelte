<script>
	import { Page, Doc, Preview } from '$components'
	import RadioGroupBasic from './RadioGroupBasic.svelte'
	import RadioGroupLabel from './RadioGroupLabel.svelte'
	import RadioGroupColor from './RadioGroupColor.svelte'
	import RadioGroupArrayBinding from './RadioGroupArrayBinding.svelte'
	import RadioGroupInline from './RadioGroupInline.svelte'
	import RadioGroupReverse from './RadioGroupReverse.svelte'
	import RadioGroupBindObject from './RadioGroupBindObject.svelte'
	import RadioGroupKey from './RadioGroupKey.svelte'
</script>

<Page title="RadioGroup">
	<p slot="description">
		<code>RadioGroup</code> component is a wrapper for <code>Radio</code> component, it can be used to
		group multiple radios in one component.
	</p>
	<Doc title="Default">
		<Preview src="./RadioGroupBasic.svelte">
			<RadioGroupBasic />
		</Preview>
	</Doc>

	<Doc title="Custom label">
		<p slot="description">
			You can use default slot to pass a custom label for <code>RadioGroup</code>.
		</p>

		<Preview src="./RadioGroupLabel.svelte">
			<RadioGroupLabel />
		</Preview>
	</Doc>

	<Doc title="Colors">
		<p slot="description">
			You can use <code>color</code> property to define background color for all <code>Radios</code>
			inside the <code>RadioGroup</code>
		</p>
		<Preview src="./RadioGroupColor.svelte">
			<RadioGroupColor />
		</Preview>
	</Doc>

	<Doc title="Inline">
		<p slot="description">
			Group radios on the same horizontal row by setting <code>inline</code> boolean property.
		</p>
		<Preview src="./RadioGroupInline.svelte">
			<RadioGroupInline />
		</Preview>
	</Doc>

	<Doc title="Reverse">
		<p slot="description">
			Put radios on the opposite side with the <code>reverse</code> boolean property.
		</p>
		<Preview src="./RadioGroupReverse.svelte">
			<RadioGroupReverse />
		</Preview>
	</Doc>

	<Doc title="Key">
		<Preview src="./RadioGroupKey.svelte">
			<RadioGroupKey />
		</Preview>
	</Doc>

	<Doc title="Binding">
		<p slot="description">
			Set an array of objects to <code>items</code> property and define <code>label</code>.
		</p>
		<Preview src="./RadioGroupArrayBinding.svelte">
			<RadioGroupArrayBinding />
		</Preview>
	</Doc>

	<Doc title="Bind as Object">
		<Preview src="./RadioGroupBindObject.svelte">
			<RadioGroupBindObject />
		</Preview>
	</Doc>
</Page>
