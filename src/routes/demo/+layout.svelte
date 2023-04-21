<script lang="ts">
	import { navigations } from '../../routes/docs/navigations'
	import { page } from '$app/stores'
	let currentPath = $page.url.pathname
	var currentNav = navigations
		.find((x) => x.id === 'menu-examples')
		?.children?.find((x) => x.route === currentPath)
	import { El } from 'yesvelte'
</script>

<svelte:head>
	<link rel="stylesheet" href="/css/daisyui.min.css" />
</svelte:head>
<El container="xl" d="flex" justifyContent="between" mt="4">
	<El justifyContent="start" w="auto"><h1>{currentNav?.title}</h1></El>
	<El justifyContent="end" w="auto">
		<slot name="pageTop" />
	</El>
</El>
<El container="xl" class="page-body">
	<slot />
</El>

<style>
	.page-body :global(.y-card) {
		margin-bottom: 40px;
	}
</style>
