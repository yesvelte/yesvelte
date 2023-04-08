<script>
	import { Page, Doc, Preview } from '$components'
	import BreadcrumbDefault from './BreadcrumbDefault.svelte'
	import BreadcrumbHeader from './BreadcrumbHeader.svelte'
	import BreadcrumbSeperator from './BreadcrumbSeperator.svelte'
</script>

<Page title="Breadcrumb">
	<p slot="description">
		Breadcrumbs are used to show the current website or app location and reduce the number of
		actions users have to take. Thanks to breadcrumbs, they can easily navigate within the website
		hierarchy and better understand its structure.
	</p>
	<Doc title="Default">
		<Preview src="./BreadcrumbDefault.svelte">
			<BreadcrumbDefault />
		</Preview>
	</Doc>

	<Doc title="Separator">
		<p slot="description">
			If you wish to use different separators, set the <code>separator</code> prop. Depending on the
			aesthetics of your design, you can choose dots, bullets or arrows.
		</p>
		<Preview src="./BreadcrumbSeperator.svelte">
			<BreadcrumbSeperator />
		</Preview>
	</Doc>

	<Doc
		title="Header"
		description="If you wish to use breadcrumbs in headers, place them above the headers.">
		<Preview src="./BreadcrumbHeader.svelte">
			<BreadcrumbHeader />
		</Preview>
	</Doc>
</Page>
