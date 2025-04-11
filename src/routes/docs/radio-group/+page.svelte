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
	{#snippet description()}
		<code>RadioGroup</code> component is a wrapper for <code>Radio</code> component, it can be used to
		group multiple radios in one component.
	{/snippet}
	<Doc title="Default">
		<Preview src="./RadioGroupBasic.svelte">
			<RadioGroupBasic />
		</Preview>
	</Doc>

	<Doc title="Custom label">
		{#snippet description()}
			You can use default slot to pass a custom label for <code>RadioGroup</code>.
		{/snippet}

		<Preview src="./RadioGroupLabel.svelte">
			<RadioGroupLabel />
		</Preview>
	</Doc>

	<Doc title="Colors">
		{#snippet description()}
			You can use <code>color</code> property to define background color for all <code>Radios</code>
			inside the <code>RadioGroup</code>
		{/snippet}
		<Preview src="./RadioGroupColor.svelte">
			<RadioGroupColor />
		</Preview>
	</Doc>

	<Doc title="Inline">
		{#snippet description()}
			Group radios on the same horizontal row by setting <code>inline</code> boolean property.
		{/snippet}
		<Preview src="./RadioGroupInline.svelte">
			<RadioGroupInline />
		</Preview>
	</Doc>

	<Doc title="Reverse">
		{#snippet description()}
			Put radios on the opposite side with the <code>reverse</code> boolean property.
		{/snippet}
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
		{#snippet description()}
			Set an array of objects to <code>items</code> property and define <code>label</code>.
		{/snippet}
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
