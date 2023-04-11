<script>
	import { Doc, Page, Preview } from '$components'
	import DropdownDefault from './DropdownDefault.svelte'
	import DropdownEvent from './DropdownEvent.svelte'
	import DropdownVariants from './DropdownVariants.svelte'
	import DropdownAutoClose from './DropdownAutoClose.svelte'
	import DropdownHeader from './DropdownHeader.svelte'
	import DropdownDivider from './DropdownDivider.svelte'
	import DropdownHref from './DropdownHref.svelte'
	import DropdownPlacement from './DropdownPlacement.svelte'
	import DropdownNoArrow from './DropdownNoArrow.svelte'
	import DropdownIcon from './DropdownIcon.svelte'
</script>

<Page title="Dropdown">
	<slot name="description">
		The dropdown component can be used to show a list of menu items when clicking on an element such
		as a button
	</slot>

	<Doc title="Default">
		<Preview src="./DropdownDefault.svelte">
			<DropdownDefault />
		</Preview>
	</Doc>

	<Doc title="Variants">
		<Preview src="./DropdownVariants.svelte">
			<DropdownVariants />
		</Preview>
	</Doc>

	<Doc title="Event">
		<Preview src="./DropdownEvent.svelte">
			<DropdownEvent />
		</Preview>
	</Doc>

	<Doc title="Auto close">
		<Preview src="./DropdownAutoClose.svelte">
			<DropdownAutoClose />
		</Preview>
	</Doc>

	<Doc title="Header">
		<Preview src="./DropdownHeader.svelte">
			<DropdownHeader />
		</Preview>
	</Doc>

	<Doc title="Divider">
		<Preview src="./DropdownDivider.svelte">
			<DropdownDivider />
		</Preview>
	</Doc>

	<Doc title="Placement">
		<Preview src="./DropdownPlacement.svelte">
			<DropdownPlacement />
		</Preview>
	</Doc>

	<Doc title="No Arrow">
		<Preview src="./DropdownNoArrow.svelte">
			<DropdownNoArrow />
		</Preview>
	</Doc>

	<Doc title="Avatar & href">
		<Preview src="./DropdownHref.svelte">
			<DropdownHref />
		</Preview>
	</Doc>

	<Doc title="With Icon">
		<Preview src="./DropdownIcon.svelte">
			<DropdownIcon />
		</Preview>
	</Doc>
</Page>
