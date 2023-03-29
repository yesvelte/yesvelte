<script>
	import { Doc, Page, Preview } from '$components'
	import MenuDefault from './MenuDefault.svelte'
</script>

<Page title="Menu">
	<p slot="description">
		<!--  -->
	</p>
	<Doc title="Default">
		<Preview src="./MenuDefault.svelte">
			<MenuDefault />
		</Preview>
	</Doc>
</Page>
