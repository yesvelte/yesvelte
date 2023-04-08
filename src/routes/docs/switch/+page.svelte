<script>
	import { Page, Doc, Preview } from '$components'
	import SwitchColor from './SwitchColor.svelte'
	import SwitchDefault from './SwitchDefault.svelte'
	import SwitchDescription from './SwitchDescription.svelte'
	import SwitchDisabled from './SwitchDisabled.svelte'
	import SwitchInline from './SwitchInline.svelte'
	import SwitchLabel from './SwitchLabel.svelte'
	import SwitchReverse from './SwitchReverse.svelte'
</script>

<Page
	title="Switch"
	description="The Switch component provides users the ability to choose between two distinct values. These are very similar to a
toggle, or on/off switch, though aesthetically different than a Switch.">
	<Doc title="Default">
		<Preview src="./SwitchDefault.svelte">
			<SwitchDefault />
		</Preview>
	</Doc>

	<Doc title="Label">
		<Preview src="./SwitchLabel.svelte">
			<SwitchLabel />
		</Preview>
	</Doc>

	<Doc title="Color">
		<Preview src="./SwitchColor.svelte">
			<SwitchColor />
		</Preview>
	</Doc>

	<Doc title="Description">
		<Preview src="./SwitchDescription.svelte">
			<SwitchDescription />
		</Preview>
	</Doc>

	<Doc title="Disabled">
		<Preview src="./SwitchDisabled.svelte">
			<SwitchDisabled />
		</Preview>
	</Doc>

	<Doc title="Inline">
		<Preview src="./SwitchInline.svelte">
			<SwitchInline />
		</Preview>
	</Doc>

	<Doc title="Reverse">
		<Preview src="./SwitchReverse.svelte">
			<SwitchReverse />
		</Preview>
	</Doc>
</Page>
