<script>
	import { Page, Doc, Preview } from '$components'
	import RadioColors from './RadioColors.svelte'
	import RadioLabels from './RadioLabels.svelte'
	import RadioDisabled from './RadioDisabled.svelte'
	import RadioInline from './RadioInline.svelte'
	import RadioReverse from './RadioReverse.svelte'
	import RadioExample from './RadioExample.svelte'
	import RadioDescription from './RadioDescription.svelte'
</script>

<Page title="Radio">
	<p slot="description">
		<code>Radio</code> component is a wrapper for the native <code>input[type="radio"]</code> element.
	</p>
	<Doc title="Default">
		<p slot="description">
			You can use <code>label</code> property to set the radio's label. Also, label
			<code>slot</code>
			provides for complex contents. If you don't set neither <code>label</code> property nor
			<code>label</code> slot, the radio will be rendered without label.
		</p>
	</Doc>
	<Preview src="./RadioLabels.svelte">
		<RadioLabels />
	</Preview>

	<Doc title="Colors">
		<Preview src="./RadioColors.svelte">
			<RadioColors />
		</Preview>
	</Doc>

	<Doc title="Description">
		<Preview src="./RadioDescription.svelte">
			<RadioDescription />
		</Preview>
	</Doc>

	<Doc title="Disabled">
		<Preview src="./RadioDisabled.svelte">
			<RadioDisabled />
		</Preview>
	</Doc>

	<Doc title="Inline">
		<p slot="description">
			Group radios on the same horizontal row by setting <code>inline</code> boolean property.
		</p>
		<Preview src="./RadioInline.svelte">
			<RadioInline />
		</Preview>
	</Doc>

	<Doc title="Reverse">
		<p slot="description">
			Put radios on the opposite side with the <code>reverse</code> boolean property.
		</p>
		<Preview src="./RadioReverse.svelte">
			<RadioReverse />
		</Preview>
	</Doc>

	<Doc title="Example">
		<p slot="description">Here is a complex example for payment card selection.</p>
		<Preview src="./RadioExample.svelte">
			<RadioExample />
		</Preview>
	</Doc>
</Page>
