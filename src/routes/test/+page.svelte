<script>
	import { Nav, NavBrand, NavItem, NavToggler, NavTogglerIcon, Navbar, Dropdown, Avatar, DropdownMenu, DropdownItem } from 'yesvelte'
	import 'yesvelte/css/tabler.css'
</script>

<Navbar>
	<NavBrand slot="start" href="#">Navbar</NavBrand>

	<!-- <NavToggler dSm="none">
		<NavTogglerIcon />
	</NavToggler> -->

	<Nav me="auto">
		<NavItem active href="#" title="Home" />
		<NavItem href="#" title="Link" />
		<NavItem title="Dropdown">
			<NavItem href="#" title="Action" />
			<NavItem href="#" title="Another action" />
			<NavItem divider />
			<NavItem href="#" title="Something else here" />
		</NavItem>
		<NavItem title="Disabled" disabled />
	</Nav>

	<Dropdown slot="end" arrow={false}>
		<Avatar slot="target">
			<img src="/images/avatar.png" />
		</Avatar>
		<DropdownMenu>
			<DropdownItem>Item 1</DropdownItem>
			<DropdownItem>Item 2</DropdownItem>
			<DropdownItem>Item 3</DropdownItem>
		</DropdownMenu>
	</Dropdown>
</Navbar>
