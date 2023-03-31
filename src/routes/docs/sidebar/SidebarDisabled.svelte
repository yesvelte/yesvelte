<script>
	import { Sidebar, SidebarItem } from 'yesvelte'
</script>

<Sidebar theme="dark">
	<SidebarItem icon="home" title="Getting Started" />
	<SidebarItem disabled icon="box" title="Customize (disabled)" />
	<SidebarItem icon="star" title="Components" />
	<SidebarItem active icon="user" title="User Management">
		<SidebarItem title="Users" />
		<SidebarItem disabled title="Roles (disabled)" />
	</SidebarItem>
</Sidebar>
