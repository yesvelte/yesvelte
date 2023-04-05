<script lang="ts">
	import { El, Icon, Navbar, NavbarItem, FormSwitch } from 'yesvelte'
	import { navigations } from './navigations'

	let dark: boolean = false
</script>

<svelte:head>
	<link rel="stylesheet" href="/css/tabler.css" />
	<meta name="robots" content="index, follow" />
	<meta name="author" content="Amir Pournasserian" />
</svelte:head>

<El container="fluid" class="y-app {dark ? 'y-app-theme-dark' : ''}">
	<El row alignItems="center" justifyContent="start">
		<El col="1" p="2" tag="a" href="/" style="height: 60px;">
			<img style="height: 100%;" alt="logo" src="/images/svelte.svg" />
		</El>
		<Navbar col="5" row>
			{#each navigations as navigation}
				{#if navigation.children}
					<NavbarItem title={navigation.title} icon={navigation.icon}>
						{#each navigation.children ?? [] as menu}
							{@const [pack, icon] = (menu.icon ?? ':').split(':')}
							<NavbarItem icon={menu.icon} title={menu.title} href={navigation.route + menu.route}>
								<Icon slot="start" {pack} name={icon} />
							</NavbarItem>
						{/each}
					</NavbarItem>
				{:else}
					<NavbarItem href="#{navigation.id}" icon={navigation.icon} title={navigation.title} />
				{/if}
			{/each}
		</Navbar>
		<FormSwitch mt="3" col="auto" ms="auto" bind:value={dark}>Dark</FormSwitch>
	</El>

	<El row>
		<slot />
	</El>
</El>
