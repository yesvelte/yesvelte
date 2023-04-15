<script>
	import { Navbar, NavbarItem } from 'yesvelte'
</script>

<Navbar theme="dark">
	<NavbarItem title="Home" />
	<NavbarItem title="Features" />
	<NavbarItem title="Pricing" />
	<NavbarItem title="Disabled" disabled />

	<NavbarItem title="Dropdown link">
		<NavbarItem title="Action" />
		<NavbarItem title="Another action" />
		<NavbarItem title="Something else here" />
	</NavbarItem>
</Navbar>
