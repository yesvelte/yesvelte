<script lang="ts">
	import { Button, El, Icon, Navbar, NavbarItem } from 'yesvelte'
	import Layout from '$components/Layout.svelte'
	import { navigations } from '../../routes/docs/navigations'
	import { page } from '$app/stores'

	import 'yesvelte/css/tabler.min.css'

	$: currentPath = $page.url.pathname
	$: currentNav = navigations
		.find((x) => {
			console.log(x)
			return x.id === 'menu-examples'
		})
		?.children?.find((x) => {
			if (x.route.startsWith('/authentication')) return false
			return '/demo' + x.route === currentPath
		})
</script>

<!-- <El tag="h2" position="absolute" p="4" top="0" start="0">
	<Button link on:click={() => history.back()}>Back</Button>
</El>
<El pt="5" container="xl">
	<slot />
</El> -->
<Layout wide>
	<El container="xl">
		<El d="flex" my="3">
			{#if currentNav?.title}
				<El tag="h1">
					{currentNav?.title}
				</El>
			{/if}
		</El>
		<El>
			<slot />
			
		</El>
	</El>
</Layout>
