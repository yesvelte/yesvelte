<script lang="ts">
	import { El } from 'yesvelte'
	import { navigations } from '../../routes/docs/navigations'
	import { page } from '$app/stores'

	$: currentPath = $page.url.pathname
	$: currentNav = navigations
		.find((x) => {
			console.log(x)
			return x.id === 'menu-examples'
		})
		?.children?.find((x) => {
			console.log(x, x.route, currentPath)
			if (x.route.startsWith('/authentication')) return false
			return '/demo' + x.route === currentPath
		})
</script>

<El container="xl">
	<El d="flex" my="3">
		{#if currentNav?.title}
			<El tag="h1">
				{currentNav?.title}
			</El>
		{/if}
	</El>
	<div class="page-body">
		<slot />
	</div>
</El>
