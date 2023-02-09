<script lang="ts">
	import { El } from '$lib'
	import ToC from './ToC.svelte'

	export let title: string = ''
	export let description: string = ''
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
</svelte:head>

<El container="md">
	<El row>
		<El col="9">
			<El border>
				<El tag="h1">{title}</El>
				<El tag="p">{description}</El>
				<slot />
			</El>
		</El>
		<El col="3">
			<ToC />
		</El>
	</El>
</El>
