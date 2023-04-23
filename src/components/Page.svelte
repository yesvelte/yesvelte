<script lang="ts">
	import { Card, CardBody, El } from 'yesvelte'
	import ToC from './ToC.svelte'
	import { page } from '$app/stores'
	export let title: string = ''
	export let description: string = ''
</script>

<svelte:head>
	<title>{$page.data.metaData.title ?? title}</title>
	<meta name="description" content={$page.data.metaData.description ?? description} />
</svelte:head>

<El row py="3">
	<El colLg="10" colSm="12">
		<Card size="md">
			<CardBody>
				<El tag="h1">{title}</El>
				<slot name="description">
					<El tag="p">{description}</El>
				</slot>
				<slot />
			</CardBody>
		</Card>
	</El>
	<El colLg="2" d="none" dLg="inline-block">
		<ToC />
	</El>
</El>
