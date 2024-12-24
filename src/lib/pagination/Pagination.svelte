<script lang="ts">
	import { Icon } from '../icon'
	import { El } from '../el'
	import type { PaginationProps } from './Pagination.types'
	import PaginationItem from './PaginationItem.svelte'

	type $$Props = PaginationProps

	let {
		componentName = 'pagination',
		from = 0,
		to = 0,
		hasNext = false,
		hasPrev = false,
		hasFirst = false,
		hasLast = false,
		value = $bindable(from),
		children,
		firstSnippet,
		prevSnippet,
		nextSnippet,
		lastSnippet,
		pageSnippet,
		...restProps
	}: $$Props = $props()

	let firstPage = $derived(from)
	let lastPage = $derived(to)
	let pages = $derived(Array.from({ length: 1 + to! - from! }, (_, i) => i + from!))
</script>

<El {...restProps} {componentName}>
	{#if children}
		{@render children()}
	{:else}
		{#if hasFirst}
			<PaginationItem disabled={value == firstPage} onclick={() => (value = firstPage)}>
				{#if firstSnippet}
					{@render firstSnippet()}
				{:else}
					<Icon name="chevrons-left" />
				{/if}
			</PaginationItem>
		{/if}
		{#if hasPrev}
			<PaginationItem disabled={value == 1} onclick={() => (value -= 1)}>
				{#if prevSnippet}
					{@render prevSnippet()}
				{:else}
					<Icon name="chevron-left" />
				{/if}
			</PaginationItem>
		{/if}

		{#each pages as page}
			<PaginationItem active={value === page} onclick={() => (value = page)}>
				{#if pageSnippet}
					{@render pageSnippet({ page })}
				{:else}
					{page}
				{/if}
			</PaginationItem>
		{/each}

		{#if hasNext}
			<PaginationItem disabled={value == lastPage} onclick={() => (value += 1)}>
				{#if nextSnippet}
					{@render nextSnippet()}
				{:else}
					<Icon name="chevron-right" />
				{/if}
			</PaginationItem>
		{/if}
		{#if hasLast}
			<PaginationItem disabled={value == lastPage} onclick={() => (value = lastPage)}>
				{#if lastSnippet}
					{@render lastSnippet()}
				{:else}
					<Icon name="chevrons-right" />
				{/if}
			</PaginationItem>
		{/if}
	{/if}
</El>
