<script>
	import { El, Navbar, NavbarItem } from 'yesvelte'
</script>

<El row alignItems="center">
	<El style="height: 60px" tag="a" href="/" col="12" colSm="1">
		<img style="height: 100%" src="/images/svelte.svg" />
	</El>

	<Navbar col="12" colSm="9">
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
</El>
