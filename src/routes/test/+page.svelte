<script>
	import { El, NavbarItem, Navbar } from 'yesvelte'
	import 'yesvelte/css/tabler.css'
</script>

<El row justifyContent="between">
	<Navbar col="4">
		<NavbarItem active href="#" title="Home" />
		<NavbarItem href="#" title="Link" />
		<NavbarItem title="Dropdown">
			<NavbarItem href="#" title="Action" />
			<NavbarItem href="#" title="Another action" />
			<NavbarItem divider />
			<NavbarItem href="#" title="Something else here" />
		</NavbarItem>
		<NavbarItem title="Disabled" disabled />
	</Navbar>
	<Navbar col="5">
		<NavbarItem active href="#" title="Home" />
		<NavbarItem href="#" title="Link" />
		<NavbarItem title="Dropdown">
			<NavbarItem href="#" title="Action" />
			<NavbarItem href="#" title="Another action" />
			<NavbarItem divider />
			<NavbarItem href="#" title="Something else here" />
		</NavbarItem>
		<NavbarItem title="Disabled" disabled />
	</Navbar>
</El>
