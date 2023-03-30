<script>
	import { Badge, Sidebar } from 'yesvelte'
	import { SidebarItem } from 'yesvelte'
	import 'yesvelte/css/tabler.css'
</script>

<Sidebar theme="dark">
	<SidebarItem title="Home" icon="home" />
	<SidebarItem title="Interfaces" icon="box" />
	<SidebarItem title="Test" icon="home">
		<SidebarItem title="Home" icon="home" />
		<SidebarItem title="Interfaces" icon="box">
			<SidebarItem title="Test" icon="box" />
			<SidebarItem title="Card" icon="box" />
			<SidebarItem title="abc" icon="box">
				<Badge slot="end">New</Badge>
			</SidebarItem>
			<SidebarItem title="def" icon="box">
				<Badge color="warning" slot="end">Depracated</Badge>
			</SidebarItem>
		</SidebarItem>
	</SidebarItem>
</Sidebar>
