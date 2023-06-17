<script lang="ts">
	import { El, Icon, Button, Select, Offcanvas, OffcanvasHeader } from 'yesvelte'
	import { page } from '$app/stores'
	import SidebarNavigations from '$components/SidebarNavigations.svelte'
	import Logo from '$components/Logo.svelte'
	import { browser } from '$app/environment'
	import ToC from './ToC.svelte'

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

	let sections: any[] = []

	$: hasToC = $page.url.pathname !== '/docs' && $page.url.pathname !== '/docs/installation'

	$: nextItem = $page.data.links.nextItem
	$: prevItem = $page.data.links.prevItem
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

<Offcanvas class="y-docs-offcanvas" backdrop bind:show={offcanvasOpen}>
	<OffcanvasHeader p="3">
		<Logo href="/" height="40" mb="0" />
	</OffcanvasHeader>
	<SidebarNavigations p="3" position="static" {pathname} />
</Offcanvas>

<El bgColor={dark ? 'dark' : 'light'} borderBottom>
	<El container="lg" d="flex" alignItems="center" justifyContent="between" py="3" px="3">
		<El d="flex" gap="3" alignItems="center">
			<Icon dMd="none" size="xl" name="menu-2" on:click={() => (offcanvasOpen = !offcanvasOpen)} />
			<Logo href="/" height="32" />
		</El>

		<El d="flex" alignItems="center" gap="2">
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

<El mx="auto" px="3" container="lg">
	<El row>
		<El style="width: max-content" d="none" dMd="block" colMd="auto">
			<SidebarNavigations style="margin-left: -1rem;" {pathname} />
		</El>
		<El colLg={hasToC ? '7' : true} colXl={hasToC ? '8' : true} colSm="12" colMd>
			<El px="2">
				<slot />
			</El>

			<El row mt="3" mb="5">
				{#if prevItem}
					<El col="auto" tag="a" href={prevItem.href}>
						<El class="docs-link" tag="h3" mb="0">
							<Icon mb="1" name="chevron-left" />
							{prevItem.title}
						</El>
					</El>
				{/if}
				{#if nextItem}
					<El col="auto" ms="auto" justifyContent="end" tag="a" href={nextItem.href}>
						<El class="docs-link" tag="h3" mb="0">
							{nextItem.title}
							<Icon mb="1" name="chevron-right" />
						</El>
					</El>
				{/if}
			</El>
		</El>
		<El colLg d="none" dLg={hasToC ? 'inline-block' : 'none'}>
			<ToC bind:sections />
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
			<El tag="a" href="#">Privacy Policy</El>
			<El tag="a" href="#">Terms of Service</El>
			<El tag="a" href="#">Cookies Settings</El>
		</El>
	</El>
</El>
