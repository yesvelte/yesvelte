<script lang="ts">
	import {
		El,
		Icon,
		Navbar,
		NavbarItem,
		FormSwitch,
		FormSelect,
		Dropdown,
		DropdownMenu,
		DropdownItem,
		Button,
		Select,
	} from 'yesvelte'
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
		<link rel="stylesheet" href="/css/tabler.css" />
	{:else if theme === 'daisyui'}
		<link rel="stylesheet" href="/css/daisyui.min.css" />
	{/if}
	<meta name="robots" content="index, follow" />
	<meta name="author" content="Amir Pournasserian" />
</svelte:head>

<El container="fluid" {...containerProps}>
	<El row alignItems="center" justifyContent="start">
		<El col="2" p="2" px="3" tag="a" href="/" textColor="secondary" fontSize="1">
			<El tag="h1" mb="0">YeSvelte</El>
		</El>
		<El row col colLg="8" pe="4" justifyContent="between" alignItems="center">
			<El col />
			<!-- <Navbar col row d="none">
				{#each navigations as navigation}
					{#if navigation.children}
						<NavbarItem title={navigation.title} icon={navigation.icon}>
							{#each navigation.children ?? [] as menu}
								{@const [pack, icon] = (menu.icon ?? ':').split(':')}
								<NavbarItem
									icon={menu.icon}
									title={menu.title}
									href={navigation.route + menu.route}>
									<Icon slot="start" {pack} name={icon} />
								</NavbarItem>
							{/each}
						</NavbarItem>
					{:else}
						<NavbarItem href="#{navigation.id}" icon={navigation.icon} title={navigation.title} />
					{/if}
				{/each}
			</Navbar> -->

			<El mt="3" row alignItems="end" style="width: 250px">
				<El col="10">
					<Select mb="0" bind:value={theme} items={['tabler', 'daisyui']} />
				</El>
				<El col="2">
					<Button outline on:click={() => (dark = !dark)}>
						{#if dark}
							<Icon name="sun" />
						{:else}
							<Icon name="moon" />
						{/if}
					</Button>
				</El>
			</El>

			<Dropdown d="none" arrow={false}>
				<Button slot="target">
					<Icon name="palette" />
				</Button>
				<DropdownMenu>
					<DropdownItem header>Light</DropdownItem>
					<DropdownItem
						on:click={() => {
							dark = false
							theme = 'daisyui'
						}}>DaisyUI</DropdownItem>
					<DropdownItem
						on:click={() => {
							dark = false
							theme = 'tabler'
						}}>
						Tabler
					</DropdownItem>
					<DropdownItem divider />
					<DropdownItem header>Dark</DropdownItem>
					<DropdownItem
						on:click={() => {
							dark = true
							theme = 'daisyui'
						}}>
						DaisyUI
					</DropdownItem>
					<DropdownItem
						on:click={() => {
							dark = true
							theme = 'tabler'
						}}>
						Tabler
					</DropdownItem>
				</DropdownMenu>
			</Dropdown>
		</El>
	</El>

	<El row>
		<slot />
	</El>
</El>
