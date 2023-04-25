<script>
	import { Page, Doc, Preview } from '$components'
	import NavbarDropdown from './NavbarDropdown.svelte'
	import NavbarDefault from './NavbarDefault.svelte'
	import NavbarIcon from './NavbarIcon.svelte'
	import NavbarBrand from './NavbarBrand.svelte'
	import NavbarAvatar from './NavbarAvatar.svelte'
	import NavbarAvatarJustify from './NavbarAvatarJustify.svelte'
	import NavbarFullExample from './NavbarFullExample.svelte'
</script>

<Page title="Navbar">
	<Doc title="Default">
		<Preview src="./NavbarDefault.svelte">
			<NavbarDefault />
		</Preview>
	</Doc>

	<Doc title="Dropdown">
		<Preview src="./NavbarDropdown.svelte">
			<NavbarDropdown />
		</Preview>
	</Doc>

	<Doc title="Icon">
		<Preview src="./NavbarIcon.svelte">
			<NavbarIcon />
		</Preview>
	</Doc>

	<Doc title="With Brand">
		<Preview src="./NavbarBrand.svelte">
			<NavbarBrand />
		</Preview>
	</Doc>
	<Doc
		title="With Avatar"
		description="You can change placement of navbar menus by changing colSm propoerty of Navbar component">
		<Preview src="./NavbarAvatar.svelte">
			<NavbarAvatar />
		</Preview>
		<Preview src="./NavbarAvatarJustify.svelte">
			<NavbarAvatarJustify />
		</Preview>
	</Doc>

	<Doc title="Full Example">
		<Preview src="./NavbarFullExample.svelte">
			<div class="custom-class">
				<NavbarFullExample />
			</div>
		</Preview>
	</Doc>
</Page>

<style>
	.custom-class {
		height: 400px;
		margin: -16px -24px;
	}

	:global(.y-preview-body) {
		overflow-x: auto;
	}
</style>
