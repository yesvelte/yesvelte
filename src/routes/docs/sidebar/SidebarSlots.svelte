<script>
	import { Badge, El, Icon, Sidebar, SidebarItem } from 'yesvelte'
</script>

<Sidebar theme="dark">
	<SidebarItem icon="home" title="Default title" />
	<SidebarItem>
		{#snippet startSnippet()}
			<Icon name="home" />
		{/snippet}
		{#snippet titleSnippet()}
			<El><b>Custom</b> title</El>
		{/snippet}
		{#snippet endSnippet()}
			<Badge>New</Badge>
		{/snippet}
	</SidebarItem>
	<SidebarItem icon="home">
		{#snippet titleSnippet()}
			<El><b>Another</b> Item</El>
		{/snippet}
		{#snippet endSnippet()}
			<Badge>New</Badge>
		{/snippet}
	</SidebarItem>
</Sidebar>
