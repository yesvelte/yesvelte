<script>
	import { Page, Doc, Preview } from '$components'
	import PaginationDefault from './PaginationDefault.svelte'
	import PaginationHref from './PaginationHref.svelte'
	import PaginationProps from './PaginationProps.svelte'
	import PaginationSlots from './PaginationSlots.svelte'
</script>

<Page title="Pagination">
	{#snippet description()}
		The Pagination component enables the user to select a specific page from a range of pages.
	{/snippet}
	<Doc title="Default">
		<Preview src="./PaginationDefault.svelte">
			<PaginationDefault />
		</Preview>
	</Doc>
	<Doc title="With Href">
		<Preview src="./PaginationHref.svelte">
			<PaginationHref />
		</Preview>
	</Doc>
	<Doc title="Props">
		<Preview src="./PaginationProps.svelte">
			<PaginationProps />
		</Preview>
	</Doc>
	<Doc title="Custom Slots">
		<Preview src="./PaginationSlots.svelte">
			<PaginationSlots />
		</Preview>
	</Doc>
</Page>
