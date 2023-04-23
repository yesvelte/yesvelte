<script lang="ts">
	import { Sidebar, SidebarItem } from 'yesvelte/sidebar'

	import { navigations } from '../routes/docs/navigations'
	import { Icon } from 'yesvelte/icon'

	export let pathname: string = ''
</script>

<Sidebar {...$$restProps}>
	{#each navigations as navigation}
		{#if navigation.children}
			<SidebarItem active title={navigation.title} icon={navigation.icon}>
				{#each navigation.children ?? [] as menu}
					{@const [pack, icon] = (menu.icon ?? ':').split(':')}
					<SidebarItem
						active={pathname === navigation.route + menu.route}
						icon={menu.icon}
						title={menu.title}
						href={navigation.route + menu.route}>
						<Icon slot="start" {pack} name={icon} />
					</SidebarItem>
				{/each}
			</SidebarItem>
		{:else}
			<SidebarItem
				active={pathname.startsWith(navigation.route ?? '')}
				href="#{navigation.id}"
				icon={navigation.icon}
				title={navigation.title} />
		{/if}
	{/each}
</Sidebar>
