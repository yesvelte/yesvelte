<script lang="ts">
	import { Card, CardBody, El, Icon, Sidebar, SidebarItem } from 'yesvelte'
	import ToC from './ToC.svelte'
	import { navigations } from '../routes/docs/navigations'
	import { page } from '$app/stores'
	export let title: string = ''
	export let description: string = ''

	$: pathname = $page.url.pathname
</script>

<svelte:head>
	<title>{$page.data.metaData.title ?? title}</title>
	<meta name="description" content={$page.data.metaData.description ?? description} />
</svelte:head>

<El row>
	<El position="relative" colMd="2" d="none" dMd="inline-block">
		<Sidebar pt="2" position="absolute">
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
	</El>
	<El colMd="8" colSm="12" pt="3" ps="3">
		<Card size="lg">
			<CardBody>
				<El tag="h1">{title}</El>
				<slot name="description">
					<El tag="p">{description}</El>
				</slot>
				<slot />
			</CardBody>
		</Card>
	</El>
	<El colMd="2" d="none" dMd="inline-block">
		<ToC />
	</El>
</El>
