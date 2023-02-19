<script>
	import { Page, Doc, Preview } from '$components'
	import RibbonColor from './RibbonColor.svelte'
	import RibbonPositions from './RibbonPositions.svelte'
</script>

<Page title="Ribbons">
	<p slot="description">
		Ribbons are used to express something special on a card. Ribbon container should have <code
			>relative</code> position.
	</p>
	<Doc title="Color">
		<Preview src="./RibbonColor.svelte">
			<div class="custom-class"><RibbonColor /></div>
		</Preview>
	</Doc>

	<Doc title="Position">
		<Preview src="./RibbonPositions.svelte">
			<div class="custom-class"><RibbonPositions /></div>
		</Preview>
	</Doc>
</Page>

<style>
	.custom-class > :global(.u-el-row > .u-el > .u-card) {
		margin: 0.25rem 0;
	}
</style>
