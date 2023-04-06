<script>
	import { Sidebar, SidebarItem } from 'yesvelte'
</script>

<Sidebar theme="dark">
	<SidebarItem icon="home" title="Getting Started" />
	<SidebarItem icon="box" title="Customize" />
	<SidebarItem icon="star" title="Components" />
	<SidebarItem icon="user" title="User Management">
		<SidebarItem title="Users" />
		<SidebarItem title="Roles" />
	</SidebarItem>
</Sidebar>
