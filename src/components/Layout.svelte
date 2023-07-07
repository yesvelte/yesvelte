<script lang="ts">
	import { El, Icon, Button, Select, Offcanvas, OffcanvasHeader, Input } from 'yesvelte'
	import { page } from '$app/stores'
	import SidebarNavigations from '$components/SidebarNavigations.svelte'
	import Logo from '$components/Logo.svelte'
	import { browser } from '$app/environment'
	import ToC from './ToC.svelte'
	import SearchBox from './SearchBox.svelte'

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
		'data-bs-theme': dark ? 'dark' : 'light',
	}

	$: if (browser) {
		Object.keys(containerProps).map((key) => {
			document.body.setAttribute(key, containerProps[key])
		})
	}

	let searchOpen = false

	function openSearch() {
		searchOpen = true
	}

	let sections: any[] = []

	$: hasToC = sections.length > 0

	$: nextItem = $page.data.links?.nextItem
	$: prevItem = $page.data.links?.prevItem
</script>

<svelte:head>
	<link rel="stylesheet" href="/css/docs.css" />

	{#if theme === 'tabler'}
		<link rel="stylesheet" href="/css/tabler.min.css" />
	{:else if theme === 'daisyui'}
		<link rel="stylesheet" href="/css/daisyui.min.css" />
		<link rel="stylesheet" href="/css/daisyui-docs.css" />
	{/if}
	<meta name="robots" content="index, follow" />
	<meta name="author" content="Amir Pournasserian" />
</svelte:head>
<svelte:body {...containerProps} />

<svelte:window
	on:keydown={(e) => {
		if (e.key === 'k' && (navigator.platform === 'MacIntel' ? e.metaKey : e.ctrlKey)) {
			e.preventDefault()

			searchOpen = !searchOpen
		}

		if (e.code === 'Escape') {
			searchOpen = false
		}
	}} />

<Offcanvas class="y-docs-offcanvas" backdrop bind:show={offcanvasOpen}>
	<OffcanvasHeader p="3">
		<Logo href="/" height="40" mb="0" />
	</OffcanvasHeader>
	<SidebarNavigations p="3" position="static" {pathname} />
</Offcanvas>

<El mx="auto" position="relative" style="min-height: calc(100vh - 70px);">
	<El
		position="absolute"
		top="0"
		h="100"
		d="none"
		dMd="block"
		bgColor={dark ? 'dark' : 'light'}
		borderEnd
		colMd="auto">
		<El position="sticky" top="0">
			<Logo href="/" height="40" p="3" />

			<SidebarNavigations
				style="overflow-y: auto; overflow-x: hidden; max-height: calc(100vh - 70px)"
				{pathname} />
		</El>
	</El>
	<El class="y-docs-content" style="min-height: calc(height: 100vh - 154px)">
		<El
			position="sticky"
			style="z-index: 1040"
			top="0"
			w="100"
			bgColor={dark ? 'dark' : 'light'}
			borderBottom>
			<El
				container="xl"
				d="flex"
				mx="auto"
				alignItems="center"
				justifyContent="between"
				py="3"
				px="3">
				<El d="flex" gap="3" alignItems="center">
					<Icon
						dMd="none"
						size="xl"
						name="menu-2"
						on:click={() => (offcanvasOpen = !offcanvasOpen)} />
					<Logo dMd="none" href="/" height="32" />

					<Input on:click={openSearch} placeholder="Search..." d="none" dMd="block">
						<Icon name="search" slot="start" />
						<svelte:fragment slot="end">
							<El tag="kbd">Ctrl</El>
							<El mx="1" tag="span">+</El>
							<El tag="kbd" me="2">k</El>
						</svelte:fragment>
					</Input>
				</El>

				<El d="flex" alignItems="center" gap="2">
					<Button dMd="none" on:click={openSearch}>
						<Icon name="search" />
					</Button>

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
		<El mx="auto" container="xl">
			<El row>
				<El col>
					<El px="2">
						<slot />
					</El>

					<El row mt="3" mb="5">
						{#if prevItem}
							<El col="auto" tag="a" href={prevItem.href}>
								<El d="flex" alignItems="center" gap="1" tag="h3" mb="0">
									<Icon name="chevron-left" />
									{prevItem.title}
								</El>
							</El>
						{/if}
						{#if nextItem}
							<El col="auto" ms="auto" tag="a" href={nextItem.href}>
								<El d="flex" alignItems="center" gap="1" tag="h3" mb="0">
									{nextItem.title}
									<Icon name="chevron-right" />
								</El>
							</El>
						{/if}
					</El>
				</El>
				<El
					col="auto"
					style="width: max-content;"
					top="0"
					d="none"
					dLg={hasToC ? 'inline-block' : 'none'}>
					<El position="sticky" style="top: 4rem">
						<ToC bind:sections />
					</El>
				</El>
			</El>
		</El>
		<!-- Footer -->
		<El class={dark ? 'bg-color-dark' : 'bg-color-white'} borderTop>
			<El mx="auto" py="4" gap="3" container="lg" px="3" row>
				<El textAlign="center" col="12" colSm="auto">
					&copy; {new Date().getFullYear()} YeSvelte. All Rights Reserved
				</El>
				<El textAlign="end" ms="auto" col="12" colSm="auto" d="flex" gap="4">
					<El tag="a" href="https://github.com/yesvelte/yesvelte">Source code</El>
					<El tag="a" href="https://yesvelte.com/docs">Documentation</El>
					<!-- <El tag="a" href="#">Cookies Settings</El> -->
				</El>
			</El>
		</El>
	</El>
</El>

<SearchBox bind:open={searchOpen} />
