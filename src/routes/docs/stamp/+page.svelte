<script>
	import { Page, Doc, Preview } from '$components'
	import StampColor from './StampColor.svelte'
	import StampSize from './StampSize.svelte'
	import StampPositions from './StampPositions.svelte'
</script>

<Page title="Stamps">
	<p slot="description">
		Use stamp component to make the card view more attractive and eye catching. Stamp container
		should have
		<code>relative</code> position.
	</p>

	<Doc title="Color">
		<Preview src="./StampColor.svelte">
			<div class="custom-class"><StampColor /></div>
		</Preview>
	</Doc>

	<Doc title="Size">
		<Preview src="./StampSize.svelte">
			<div class="custom-class"><StampSize /></div>
		</Preview>
	</Doc>

	<Doc title="Position">
		<Preview src="./StampPositions.svelte">
			<div class="custom-class"><StampPositions /></div>
		</Preview>
	</Doc>
</Page>

<style>
	.custom-class > :global(.y-el-row > .y-el > .y-card) {
		margin: 0.25rem 0;
	}
</style>
