<script lang="ts">
	import { El } from 'yesvelte'
	import { page } from '$app/stores'
	
	let {
		title,
		description,
		children
	} = $props()
</script>

<svelte:head>
	<title>{$page.data.metaData?.title ?? title}</title>
	<meta name="description" content={$page.data.metaData?.description ?? description} />
</svelte:head>

<El class="y-page-title" mt="4" mb="3" tag="h1">{title}</El>
{#if typeof description == 'function'}
	{@render description()}
{:else}
	<El tag="p">{description}</El>
{/if}

{@render children?.()}

<style>
	:global(.docs-link) {
		cursor: pointer;
	}

	:global(.docs-link):hover {
		text-decoration: none;
	}
</style>
