<script>
	import { Badge, El, Icon, Sidebar, SidebarItem } from 'yesvelte'
</script>

<Sidebar theme="dark">
	<SidebarItem icon="home" title="Default title" />
	<SidebarItem>
		<Icon slot="start" name="home" />
		<El slot="title"><b>Custom</b> title</El>
		<Badge slot="end">New</Badge>
	</SidebarItem>
	<SidebarItem icon="home">
		<El slot="title"><b>Another</b> Item</El>
		<Badge slot="end">New</Badge>
	</SidebarItem>
</Sidebar>
