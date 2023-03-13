<script>
	import { Page, Doc, Preview } from '$components'
	import PaginationDefault from './PaginationDefault.svelte'
	import PaginationHref from './PaginationHref.svelte'
</script>

<Page title="Pagination">
	<p slot="description">
		The Pagination component enables the user to select a specific page from a range of pages.
	</p>
	<Doc title="Default">
		<p slot="description" />
		<Preview src="./PaginationDefault.svelte">
			<PaginationDefault />
		</Preview>
	</Doc>
	<Doc title="With Href">
		<p slot="description" />
		<Preview src="./PaginationHref.svelte">
			<PaginationHref />
		</Preview>
	</Doc>
</Page>
