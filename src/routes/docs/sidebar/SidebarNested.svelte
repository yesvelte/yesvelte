<script>
	import { Badge, Sidebar, SidebarItem } from 'yesvelte'
</script>

<Sidebar theme="dark">
	<SidebarItem icon="home" title="Home" />
	<SidebarItem active icon="package" title="Interfaces (active)">
		<SidebarItem disabled href="./empty.html" title="Empty page (disabled)" />
		<SidebarItem disabled href="./accordion.html" title="Accordion  (disabled)" />
		<SidebarItem href="./blank.html" title="Blank page" />
		<SidebarItem href="./badges.html" title="Badges">
			<Badge color="green" slot="end">New</Badge>
		</SidebarItem>
		<SidebarItem href="./buttons.html" title="Buttons" />
		<SidebarItem title="Cards">
			<SidebarItem href="./cards.html" title="Sample cards" />
			<SidebarItem href="./card-actions.html" title="Card actions">
				<Badge color="green" slot="end">New</Badge>
			</SidebarItem>
			<SidebarItem href="./cards-masonry.html" title="Cards Masonry" />
		</SidebarItem>
		<SidebarItem href="./colors.html" title="Colors" />
		<SidebarItem href="./datagrid.html" title="Data grid">
			<Badge color="green" slot="end">New</Badge>
		</SidebarItem>
		<SidebarItem href="./datatables.html" title="Datatables">
			<Badge color="green" slot="end">New</Badge>
		</SidebarItem>
		<SidebarItem href="./dropdowns.html" title="Dropdowns" />
		<SidebarItem href="./modals.html" title="Modals" />
		<SidebarItem href="./maps.html" title="Maps" />
		<SidebarItem href="./map-fullsize.html" title="Map fullsize" />
		<SidebarItem href="./maps-vector.html" title="Vector maps">
			<Badge color="green" slot="end">New</Badge>
		</SidebarItem>
		<SidebarItem href="./navigation.html" title="Navigation" />
		<SidebarItem href="./charts.html" title="Charts" />
	</SidebarItem>
</Sidebar>
