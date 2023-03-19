<script lang="ts">
	import { Icon } from '../icon'
	import { El } from '../el'
	import type { PaginationProps } from './Pagination.types'
	import PaginationItem from './PaginationItem.svelte'

	type $$Props = PaginationProps

	export let componentName: $$Props['componentName'] = 'pagination'
	export let from: $$Props['from'] = 0
	export let to: $$Props['to'] = 0

	export let hasNext: $$Props['hasNext'] = false
	export let hasPrev: $$Props['hasPrev'] = false
	export let hasFirst: $$Props['hasFirst'] = false
	export let hasLast: $$Props['hasLast'] = false

	export let value: $$Props['value'] = from

	$: firstPage = from
	$: lastPage = to
	$: pages = Array.from({ length: 1 + to! - from! }, (_, i) => i + from!)
</script>

<El {...$$restProps} {componentName}>
	<slot>
		{#if hasFirst}
			<PaginationItem disabled={value == firstPage} on:click={() => (value = firstPage)}>
				<Icon name="chevrons-left" />
			</PaginationItem>
		{/if}
		{#if hasPrev}
			<PaginationItem disabled={value == 1} on:click={() => (value -= 1)}>
				<Icon name="chevron-left" />
			</PaginationItem>
		{/if}

		{#each pages as page}
			<PaginationItem active={value === page} on:click={() => (value = page)}>
				{page}
			</PaginationItem>
		{/each}

		{#if hasNext}
			<PaginationItem disabled={value == lastPage} on:click={() => (value += 1)}>
				<Icon name="chevron-right" />
			</PaginationItem>
		{/if}
		{#if hasLast}
			<PaginationItem disabled={value == lastPage} on:click={() => (value = lastPage)}>
				<Icon name="chevrons-right" />
			</PaginationItem>
		{/if}
	</slot>
</El>
