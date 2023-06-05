<script lang="ts">
	import {
		El,
		Icon,
		Button,
		Select,
		Navbar,
		NavbarItem,
		Offcanvas,
		OffcanvasHeader,
	} from 'yesvelte'
	import { page } from '$app/stores'
	import SidebarNavigations from '$components/SidebarNavigations.svelte'
	import Logo from '$components/Logo.svelte'
	import { browser } from '$app/environment'

	let dark: boolean = false
	let theme: 'tabler' | 'daisyui' = 'tabler'

	let offcanvasOpen = false

	$: pathname = $page.url.pathname

	$: {
		pathname
		offcanvasOpen = false
	}

	$: containerProps = {
		'data-theme': dark ? 'dark' : 'light',
		class: 'y-docs-wrapper y-app' + (dark ? ' y-app-theme-dark' : ''),
	}

	$: if (browser) {
		Object.keys(containerProps).map((key) => {
			document.body.setAttribute(key, containerProps[key])
		})
	}
</script>

<svelte:head>
	<link rel="stylesheet" href="/css/docs.css" />

	{#if theme === 'tabler'}
		<link rel="stylesheet" href="/css/tabler.min.css" />
	{:else if theme === 'daisyui'}
		<link rel="stylesheet" href="/css/daisyui.min.css" />
	{/if}
	<meta name="robots" content="index, follow" />
	<meta name="author" content="Amir Pournasserian" />
</svelte:head>
<svelte:body {...containerProps} />

<Offcanvas class="y-docs-offcanvas" backdrop bind:show={offcanvasOpen}>
	<OffcanvasHeader p="3">
		<Logo href="/" height="32" mb="0" />
	</OffcanvasHeader>
	<SidebarNavigations p="3" position="static" {pathname} />
</Offcanvas>
<Navbar theme={dark ? 'dark' : 'light'} class="y-docs-navbar">
	<El position="absolute" d="flex" alignItems="center" class="y-docs-navbar-container">
		<El container="lg" d="flex" alignItems="center" justifyContent="between">
			<El />
			<El row>
				<El col="auto">
					<Select mb="0" bind:value={theme} items={['tabler', 'daisyui']} />
				</El>
				<El col>
					<Button outline on:click={() => (dark = !dark)}>
						{#if dark}
							<Icon name="sun" />
						{:else}
							<Icon name="moon" />
						{/if}
					</Button>
				</El>
			</El>
		</El>
	</El>
	<NavbarItem dMd="none" icon="menu-2" on:click={() => (offcanvasOpen = !offcanvasOpen)} />
	<Logo href="/" height="32" d="none" dMd="block" mx="3" mt="2" />
	<Logo href="/" height="32" dMd="none" mt="2" />
</Navbar>
<El d="none" dMd="block" class="y-docs-sidebar">
	<SidebarNavigations position="static" bottom="0" {pathname} />
</El>
<El class="y-docs-page">
	<El mx="auto" container="lg">
		<slot />
	</El>
</El>
