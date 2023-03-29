<script>
	import { Page, Doc, Preview } from '$components'
	import TableBorder from './TableBorder.svelte'
	import TableBorderless from './TableBorderless.svelte'
	import TableDefault from './TableDefault.svelte'
	import TableHover from './TableHover.svelte'
	// import TableTruncate from './TableTruncate.svelte'
	import TableStriped from './TableStriped.svelte'
	import TableResponsive from './TableResponsive.svelte'
	import TableColors from './TableColors.svelte'
	// import TableSort from './TableSort.svelte'
</script>

<Page title="Table">
	<p slot="description">
		Tables are a useful interface element that allows to visualise data and arrange it in a clear
		way. Thanks to that, users can browse a lot of information at once and a good table design will
		help you take care of its clarity.

		<Doc title="Default">
			<Preview src="./TableDefault.svelte">
				<div class="custom-class"><TableDefault /></div>
			</Preview>
		</Doc>

		<Doc title="Bordered">
			<Preview src="./TableBorder.svelte">
				<div class="custom-class"><TableBorder /></div>
			</Preview>
		</Doc>

		<Doc title="Borderless">
			<Preview src="./TableBorderless.svelte">
				<div class="custom-class"><TableBorderless /></div>
			</Preview>
		</Doc>

		<Doc title="Hover effect">
			<Preview src="./TableHover.svelte">
				<div class="custom-class"><TableHover /></div>
			</Preview>
		</Doc>

		<!-- <Doc title="Truncate cells">
			<Preview src="./TableTruncate.svelte">
				<div class="custom-class"><TableTruncate /></div>
			</Preview>
		</Doc> -->

		<Doc title="Striped">
			<p slot="description">
				You can change colors of Even/Odd rows by adding <code>striped</code> prop.
			</p>
			<Preview src="./TableStriped.svelte">
				<div class="custom-class">
					<TableStriped />
				</div>
			</Preview>
		</Doc>

		<Doc title="Responsive">
			<Preview src="./TableResponsive.svelte">
				<div class="custom-class">
					<TableResponsive />
				</div>
			</Preview>
		</Doc>

		<Doc title="Colors">
			<Preview src="./TableColors.svelte">
				<div class="custom-class">
					<TableColors />
				</div>
			</Preview>
		</Doc>
	</p></Page>

<style>
	.custom-class > :global(.y-table-parent) {
		overflow-x: auto;
	}
</style>
