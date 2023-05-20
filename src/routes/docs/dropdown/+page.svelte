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
			<div class="custom-class">
				<DropdownDefault />
			</div>
		</Preview>
	</Doc>

	<Doc title="Variants">
		<Preview src="./DropdownVariants.svelte">
			<div class="custom-class">
				<DropdownVariants />
			</div>
		</Preview>
	</Doc>

	<Doc title="Event">
		<Preview src="./DropdownEvent.svelte">
			<div class="custom-class">
				<DropdownEvent />
			</div>
		</Preview>
	</Doc>

	<Doc title="Auto close">
		<Preview src="./DropdownAutoClose.svelte">
			<div class="custom-class">
				<DropdownAutoClose />
			</div>
		</Preview>
	</Doc>

	<Doc title="Header">
		<Preview src="./DropdownHeader.svelte">
			<div class="custom-class">
				<DropdownHeader />
			</div>
		</Preview>
	</Doc>

	<Doc title="Divider">
		<Preview src="./DropdownDivider.svelte">
			<div class="custom-class">
				<DropdownDivider />
			</div>
		</Preview>
	</Doc>

	<Doc title="Placement">
		<Preview src="./DropdownPlacement.svelte">
			<div class="custom-class">
				<DropdownPlacement />
			</div>
		</Preview>
	</Doc>

	<Doc title="No Arrow">
		<Preview src="./DropdownNoArrow.svelte">
			<div class="custom-class">
				<DropdownNoArrow />
			</div>
		</Preview>
	</Doc>

	<Doc title="Avatar & href">
		<Preview src="./DropdownHref.svelte">
			<div class="custom-class">
				<DropdownHref />
			</div>
		</Preview>
	</Doc>

	<Doc title="With Icon">
		<Preview src="./DropdownIcon.svelte">
			<div class="custom-class">
				<DropdownIcon />
			</div>
		</Preview>
	</Doc>
</Page>

<style>
	.custom-class {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
	}
</style>
