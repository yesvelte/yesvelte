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

	let dark: boolean = false
	let theme: 'tabler' | 'daisyui' = 'tabler'

	let offcanvasOpen = false

	$: pathname = $page.url.pathname

	$: containerProps = {
		'data-theme': dark ? 'dark' : 'light',
		class: 'y-docs-wrapper y-app' + (dark ? ' y-app-theme-dark' : ''),
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

<El {...containerProps}>
	<Offcanvas class="y-docs-offcanvas" backdrop bind:show={offcanvasOpen}>
		<OffcanvasHeader p="3">
			<Logo mb="0" />
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
		<Logo d="none" dMd="block" mx="3" mt="2" />
		<Logo dMd="none" mt="2" />
	</Navbar>
	<El d="none" dMd="block" class="y-docs-sidebar">
		<SidebarNavigations position="static" bottom="0" {pathname} />
	</El>
	<El class="y-docs-page">
		<El mx="auto" container="lg">
			<slot />
		</El>
	</El>
</El>

<style>
	:global(.y-docs-page) {
		margin-left: 0px;
	}
	:global(.y-docs-sidebar) {
		margin-top: 56px;
		position: absolute;
	}

	:global(.y-docs-offcanvas) {
		position: absolute;
		width: 300px !important;
	}

	:global(.y-docs-navbar-container) {
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
	}
	:global(.y-docs-sidebar) > :global(*) {
		width: 270px !important;
	}

	:global(.y-sidebar-wrapper) {
		padding: 8px !important;
	}

	:global(.y-docs-offcanvas) :global(.y-sidebar-wrapper) {
		width: auto;
	}

	:global(.y-offcanvas-header) {
		padding-top: 12px !important;
		padding-bottom: 12px !important;
	}
	@media (min-width: 768px) {
		:global(.y-docs-page) {
			margin-left: 270px;
		}

		:global(.y-docs-navbar-container) {
			left: 270px;
		}
	}
</style>
