<script lang="ts">
	import { Sidebar, SidebarItem } from 'yesvelte/sidebar'

	import { navigations, type Navigation } from '../routes/docs/navigations'
	import { Icon } from 'yesvelte/icon'

	function isActive(navigation: Navigation, pathname: string) {
		for (let child of navigation.children ?? []) {
			if (navigation.route + child.route === pathname) {
				return true
			}
		}
		return false
	}

	export let pathname: string = ''
</script>

<Sidebar class="y-docs-sidebar" {...$$restProps}>
	{#each navigations as navigation}
		{#if navigation.children}
			<SidebarItem
				active={isActive(navigation, pathname)}
				title={navigation.title}
				icon={navigation.icon}>
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
				href={navigation.route}
				icon={navigation.icon}
				title={navigation.title} />
		{/if}
	{/each}
</Sidebar>
