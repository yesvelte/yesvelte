<script>
	import { Page, Doc, Preview } from '$components'
	import DividerDefault from './DividerDefault.svelte'
	import DividerPositions from './DividerPositions.svelte'
	import DividerColors from './DividerColors.svelte'
	import DividerDirection from './DividerDirection.svelte'
</script>

<Page
	title="Divider"
	description="Dividers help organize content and make the interface layout clear and uncluttered. Greater clarity adds up to better
user experience and enhanced interaction with a website or app."
>
	<Doc
		title="Defaults"
		description="Use dividers to visually separate content into parts. You can use a line only or add text that will be centered by
default."
	>
		<Preview src="./DividerDefault.svelte">
			<DividerDefault />
		</Preview>
	</Doc>

	<Doc
		title="Text Positions"
		description="You can modify the position of the text which is to be included in a separator and make it left-
	or right-aligned. Otherwise, the text will remain centered."
	>
		<Preview src="./DividerPositions.svelte">
			<DividerPositions />
		</Preview>
	</Doc>

	<Doc title="Colors" description="Customize the color of the divider to suit your design.">
		<Preview src="./DividerColors.svelte">
			<DividerColors />
		</Preview>
	</Doc>

	<Doc title="Vertical" description="Direction of divider also can be vertical.">
		<Preview src="./DividerDirection.svelte">
			<DividerDirection />
		</Preview>
	</Doc>
</Page>
