<script lang="ts">
	import { El } from 'yesvelte'
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

<Layout wide>
	{#if currentNav?.title}
		<El d="flex" my="4">
			<El tag="h1">
				{currentNav?.title}
			</El>
		</El>
	{/if}
	<El>
		<slot />
	</El>
</Layout>
