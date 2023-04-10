<script lang="ts">
	import { El, Icon, Navbar, NavbarItem, FormSwitch, FormSelect } from 'yesvelte'
	import { navigations } from './navigations'

	let dark: boolean = false
	let theme: 'tabler' | 'daisyui' = 'tabler'

	$: containerProps = {
		'data-theme': dark ? 'dark' : 'light',
		class: 'y-app' + (dark ? ' y-app-theme-dark' : ''),
	}
</script>

<svelte:head>
	{#if theme === 'tabler'}
		<link rel="stylesheet" href="/css/tabler.min.css" />
	{:else if theme === 'daisyui'}
		<link rel="stylesheet" href="/css/daisyui.min.css" />
	{/if}
	<meta name="robots" content="index, follow" />
	<meta name="author" content="Amir Pournasserian" />
</svelte:head>

<El container="fluid" {...containerProps}>
	<El row alignItems="center" justifyContent="start">
		<El col="2" p="2" tag="a" href="/" style="height: 60px;">
			<img style="height: 100%;" alt="logo" src="/images/svelte.svg" />
		</El>
		<Navbar col="5" row d="none">
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

		<El col="10" colSm="4" ms="auto">
			<El row alignItems="center">
				<FormSelect col="6" bind:value={theme} items={['tabler', 'daisyui']} />
				<FormSwitch col="6" mt="2" bind:value={dark}>Dark</FormSwitch>
			</El>
		</El>
	</El>

	<El row>
		<slot />
	</El>
</El>
