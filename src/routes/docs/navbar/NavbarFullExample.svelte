<script>
	import {
		El,
		Navbar,
		NavbarItem,
		Offcanvas,
		OffcanvasHeader,
		Sidebar,
		SidebarItem,
	} from 'yesvelte'

	let offcanvasOpen = false
</script>

<Navbar theme="light">
	<NavbarItem dMd="none" on:click={() => (offcanvasOpen = !offcanvasOpen)} icon="menu-2" />
	<El row style="width: 15rem">
		<El col tag="h1" mb="0">Logo</El>
	</El>
	<NavbarItem d="none" dMd="block" title="Item 1" />
	<NavbarItem d="none" dMd="block" title="Item 2">
		<NavbarItem title="Item 2 - 1" />
		<NavbarItem title="Item 2 - 2" />
		<NavbarItem title="Item 2 - 3" />
	</NavbarItem>
	<NavbarItem d="none" dMd="block" title="Item 3" />
</Navbar>
<Offcanvas backdrop style="width: 15rem" position="absolute" dMd="none" bind:show={offcanvasOpen}>
	<OffcanvasHeader>Navbar Example</OffcanvasHeader>
	<Sidebar mt="5" theme="light" position="absolute">
		<SidebarItem title="Item 1" />
		<SidebarItem title="Item 2">
			<SidebarItem title="Item 2 - 1" />
			<SidebarItem title="Item 2 - 2" />
			<SidebarItem title="Item 2 - 3" />
		</SidebarItem>
		<SidebarItem title="Item 3" />
	</Sidebar>
</Offcanvas>
<Sidebar theme="light" mt="5" position="absolute" d="none" dMd="block">
	<SidebarItem title="Item 1" />
	<SidebarItem title="Item 2">
		<SidebarItem title="Item 2 - 1" />
		<SidebarItem title="Item 2 - 2" />
		<SidebarItem title="Item 2 - 3" />
	</SidebarItem>
	<SidebarItem title="Item 3" />
</Sidebar>
