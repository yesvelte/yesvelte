<script lang="ts">
	import { Card, CardBody, El, Icon } from 'yesvelte'
	import ToC from './ToC.svelte'
	import { page } from '$app/stores'
	export let title: string = ''
	export let description: string = ''

	$: nextItem = $page.data.links.nextItem
	$: prevItem = $page.data.links.prevItem
</script>

<svelte:head>
	<title>{$page.data.metaData?.title ?? title}</title>
	<meta name="description" content={$page.data.metaData?.description ?? description} />
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
		<El row mt="3" mb="5">
			{#if prevItem}
				<El col="auto" tag="a" href={prevItem.href}>
					<El class="docs-link" tag="h3" mb="0">
						<Icon name="chevron-left" />
						{prevItem.title}
					</El>
				</El>
			{/if}
			{#if nextItem}
				<El col="auto" ms="auto" justifyContent="end" tag="a" href={nextItem.href}>
					<El class="docs-link" tag="h3" mb="0">
						{nextItem.title}
						<Icon name="chevron-right" />
					</El>
				</El>
			{/if}
		</El>
	</El>
	<El colLg="2" d="none" dLg="inline-block">
		<ToC />
	</El>
</El>

<style>
	:global(.docs-link) {
		cursor: pointer;
	}

	:global(.docs-link):hover {
		text-decoration: none;
	}
</style>
