<script>
	import { Navbar, NavbarItem } from 'yesvelte'
</script>

<Navbar theme="dark">
	<NavbarItem icon="home" title="Home" />
	<NavbarItem icon="star" title="Features" />
	<NavbarItem icon="currency-dollar" title="Pricing" />
	<NavbarItem title="Disabled" disabled />

	<NavbarItem title="Dropdown link">
		<NavbarItem title="Action" />
		<NavbarItem icon="home" title="Another action" />
		<NavbarItem icon="currency-dollar" title="Something else here" />
	</NavbarItem>
</Navbar>
