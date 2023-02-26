<script>
	import { Page, Doc, Preview } from '$components'
	import ButtonGroupColor from './ButtonGroupColor.svelte'
	import ButtonGroupDefault from './ButtonGroupDefault.svelte'
	import ButtonGroupIcon from './ButtonGroupIcon.svelte'
	import ButtonGroupSize from './ButtonGroupSize.svelte'
	import ButtonGroupVertical from './ButtonGroupVertical.svelte'
</script>

<Page
	title="Button Group"
	description="Group a series of buttons together on a single line or stack them in a vertical column.">
	<Doc
		title="Default"
		description="Create a list of buttons using the `ButtonGroup` component to display different actions a user can take.">
		<Preview src="./ButtonGroupDefault.svelte">
			<ButtonGroupDefault />
		</Preview>
	</Doc>
	<Doc title="Color">
		<Preview src="./ButtonGroupColor.svelte">
			<ButtonGroupColor />
		</Preview>
	</Doc>
	<Doc
		title="Size"
		description="Instead of applying button sizing classes to every button in a group, just set size property to ButtonGroup.">
		<Preview src="./ButtonGroupSize.svelte">
			<ButtonGroupSize />
		</Preview>
	</Doc>
	<Doc title="Icon" description="Set an icon in to ButtonGroup.">
		<Preview src="./ButtonGroupIcon.svelte">
			<ButtonGroupIcon />
		</Preview>
	</Doc>
	<Doc
		title="Vertical"
		description="Make a set of buttons appear vertically stacked rather than horizontally.">
		<Preview src="./ButtonGroupVertical.svelte">
			<ButtonGroupVertical />
		</Preview>
	</Doc>
</Page>
