<script>
	import { El, Navbar, NavbarItem, Avatar, Dropdown, DropdownItem, DropdownMenu } from 'yesvelte'
</script>

<El row alignItems="center" justifyContent="between">
	<El style="height: 60px" tag="a" href="/" col="12" colSm="1">
		<img style="height: 100%" src="/images/svelte.svg" />
	</El>

	<Navbar col="12" colSm="7">
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

	<El h="25" tag="a" href="/" col="12" colSm="1">
		<Dropdown arrow={false}>
			<Avatar>
				<img src="/images/avatar.png" />
			</Avatar>
			<DropdownMenu>
				<DropdownItem>Item 1</DropdownItem>
				<DropdownItem>Item 2</DropdownItem>
			</DropdownMenu>
		</Dropdown>
	</El>
</El>
