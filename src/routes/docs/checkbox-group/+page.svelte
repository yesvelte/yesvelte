<script>
	import { Page, Doc, Preview } from '$components'
	import CheckboxGroupInline from './CheckboxGroupInline.svelte'
	import CheckboxGroupKey from './CheckboxGroupKey.svelte'
	import CheckboxGroupItems from './CheckboxGroupItems.svelte'
	import CheckboxGroupDefault from './CheckboxGroupDefault.svelte'
	import CheckboxGroupReverse from './CheckboxGroupReverse.svelte'
	import CheckboxGroupLabel from './CheckboxGroupLabel.svelte'
	import CheckboxGroupColor from './CheckboxGroupColor.svelte'
	import CheckboxGroupBindObject from './CheckboxGroupBindObject.svelte'
</script>

<Page title="CheckboxGroup">
	<p slot="description">
		<code>CheckboxGroup</code> component is a wrapper for <code>Checkbox</code> component, it can be
		used to group multiple checkboxes in one component.
	</p>

	<Doc title="Default">
		<Preview src="./CheckboxGroupDefault.svelte">
			<CheckboxGroupDefault />
		</Preview>
	</Doc>

	<Doc title="Label">
		<p slot="description">
			You can use default slot to pass a custom label for <code>CheckboxGroup</code>.
		</p>
		<Preview src="./CheckboxGroupLabel.svelte">
			<CheckboxGroupLabel />
		</Preview>
	</Doc>

	<Doc title="Key">
		<p slot="description">
			Using key prop you can to choose which field of object should bind to <code>value</code>.
		</p>
		<Preview src="./CheckboxGroupKey.svelte">
			<CheckboxGroupKey />
		</Preview>
	</Doc>

	<Doc title="Color">
		<p slot="description">
			You can use <code>color</code> property to define background color for all
			<code>Checkboxes</code>
			inside the <code>CheckboxGroup</code>
		</p>
		<Preview src="./CheckboxGroupColor.svelte">
			<CheckboxGroupColor />
		</Preview>
	</Doc>

	<Doc title="Inline">
		<p slot="description">
			Group checkboxes on the same horizontal row by setting <code>inline</code> boolean property.
		</p>
		<Preview src="./CheckboxGroupInline.svelte">
			<CheckboxGroupInline />
		</Preview>
	</Doc>

	<Doc title="Reverse">
		<p slot="description">
			Put checkboxes on the opposite side with the <code>reverse</code> boolean property.
		</p>
		<Preview src="./CheckboxGroupReverse.svelte">
			<CheckboxGroupReverse />
		</Preview>
	</Doc>

	<Doc title="Binding">
		<p slot="description">
			You can use <code>items</code> property to pass an array of items to
			<code>CheckboxGroup</code> component.
		</p>
		<Preview src="./CheckboxGroupItems.svelte">
			<CheckboxGroupItems />
		</Preview>
	</Doc>

	<Doc title="Bind as Object">
		<Preview src="./CheckboxGroupBindObject.svelte">
			<CheckboxGroupBindObject />
		</Preview>
	</Doc>
</Page>
