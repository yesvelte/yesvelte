<script>
	import { Page, Doc, Preview } from '$components'
	import CheckboxColor from './CheckboxColor.svelte'
	import CheckboxLabel from './CheckboxLabel.svelte'
	import CheckboxDescription from './CheckboxDescription.svelte'
	import CheckboxReverse from './CheckboxReverse.svelte'
	import CheckboxInline from './CheckboxInline.svelte'
	import CheckboxDisabled from './CheckboxDisabled.svelte'
	import CheckboxIndeterminate from './CheckboxIndeterminate.svelte'
</script>

<Page title="Checkbox">
	<p slot="description">
		<code>Checkbox</code> component is a wrapper for <code>input</code> element with type
		<code>checkbox</code>.
	</p>

	<Doc title="Default">
		<p slot="description">
			You can use the <code>label</code> property to display in front of the checkbox. Also, you can
			use the default
			<code>slot</code> to display a custom label.
		</p>
		<Preview src="./CheckboxLabel.svelte">
			<CheckboxLabel />
		</Preview>
	</Doc>

	<Doc title="Description">
		<p slot="description">
			Checkbox can have description, to display the description below the checkbox. description can
			have custom color. Also, you can use the slot <code>name="description"</code> to display a custom
			description.
		</p>
		<Preview src="./CheckboxDescription.svelte">
			<CheckboxDescription />
		</Preview>
	</Doc>

	<Doc title="Color">
		<Preview src="./CheckboxColor.svelte">
			<CheckboxColor />
		</Preview>
	</Doc>

	<Doc title="Disabled">
		<Preview src="./CheckboxDisabled.svelte">
			<CheckboxDisabled />
		</Preview>
	</Doc>

	<Doc title="Indeterminate">
		<Preview src="./CheckboxIndeterminate.svelte">
			<CheckboxIndeterminate />
		</Preview>
	</Doc>

	<Doc title="Inline">
		<p slot="description">
			Checkbox can be inline, to display the checkbox in the same line with the sibling element. Use
			the <code>inline</code>
			boolean property.
		</p>
		<Preview src="./CheckboxInline.svelte">
			<CheckboxInline />
		</Preview>
	</Doc>

	<Doc title="Reverse">
		<p slot="description">
			Put checkboxes on the opposite side with the <code>reverse</code> boolean property.
		</p>
		<Preview src="./CheckboxReverse.svelte">
			<CheckboxReverse />
		</Preview>
	</Doc>
</Page>
