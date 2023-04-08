<script lang="ts">
	import { Page, Doc, Preview } from '$components'

	import Grid1 from './Grid1.svelte'
	import Grid2 from './Grid2.svelte'
	import Grid3 from './Grid3.svelte'
	import Grid4 from './Grid4.svelte'
	import Grid5 from './Grid5.svelte'
	import Grid6 from './Grid6.svelte'
	import Grid7 from './Grid7.svelte'
	import Grid8 from './Grid8.svelte'
	import Grid9 from './Grid9.svelte'
</script>

<Page title="Grid" description="Grid is used to create a responsive grid system.">
	<Doc title="Example">
		<p slot="description">
			<code>col</code> property is used to set the column size.
		</p>
		<Preview src="./Grid1.svelte">
			<div class="custom-class">
				<Grid1 />
			</div>
		</Preview>
	</Doc>

	<Doc title="Auto-layout columns">
		<p slot="description">
			Utilize breakpoint-specific column props for easy column sizing without an explicit numbered
			like <code>colSm="6"</code>.
		</p>
	</Doc>

	<Doc title="Equal-width">
		<p slot="description">
			For example, here are two grid layouts that apply to every device and viewport, from xs to
			xxl. Add any number of unit-less <code>col</code> for each breakpoint you need and every column
			will be the same width.
		</p>
		<Preview src="./Grid2.svelte">
			<div class="custom-class">
				<Grid2 />
			</div>
		</Preview>
	</Doc>

	<Doc title="Setting one column width">
		<p slot="description">
			Auto-layout for flexbox grid columns also means you can set the width of one column and have
			the sibling columns automatically resize around it. Note that the other columns will resize no
			matter the width of the center column.
		</p>
		<Preview src="./Grid3.svelte">
			<div class="custom-class">
				<Grid3 />
			</div>
		</Preview>
	</Doc>

	<Doc title="Variable width content">
		<p slot="description">
			Use <code>colXs="auto"</code>, <code> colSm="auto"</code>,
			<code>colMd="auto"</code>, <code> colLg="auto"</code>, <code> colXl="auto"</code>, or
			<code> colXxl="auto" </code> classes to size columns based on the natural width of their content.
		</p>
		<Preview src="./Grid4.svelte">
			<div class="custom-class">
				<Grid4 />
			</div>
		</Preview>
	</Doc>

	<Doc title="All breakpoints">
		<p slot="description">
			For grids that are the same from the smallest of devices to the largest, use the
			<code>col</code> and <code>col="1~12"</code> . Specify a numbered prop when you need a
			particularly sized column; otherwise, feel free to stick to <code>col</code>.
		</p>
		<Preview src="./Grid5.svelte">
			<div class="custom-class">
				<Grid5 />
			</div>
		</Preview>
	</Doc>

	<Doc title="Stacked to horizontal">
		<p slot="description">
			Using a single set <code>colSm="1~12"</code>, you can create a basic grid system that starts
			out stacked and becomes horizontal at the small breakpoint (sm).
		</p>
		<Preview src="./Grid6.svelte">
			<div class="custom-class">
				<Grid6 />
			</div>
		</Preview>
	</Doc>

	<Doc title="Mix and match">
		<p slot="description">
			Use a combination of different <code>col</code> prop for each tier as needed. See the example below
			for a better idea of how it all works.
		</p>
		<Preview src="./Grid7.svelte">
			<div class="custom-class">
				<Grid7 />
			</div>
		</Preview>
	</Doc>

	<Doc title="Row columns">
		<p slot="description">
			Use the responsive <code>rowCols</code> properties to quickly set the number of columns that
			best render your content and layout. Whereas normal <code>col="1~12"</code> classes apply to
			the individual columns (e.g.,
			<code>colmd="4"</code>), the row columns classes are set on the parent <code>row</code> as a
			shortcut. With
			<code>rowCols="auto"</code> you can give the columns their natural width. Use these row columns
			classes to quickly create basic grid layouts or to control your card layouts.
		</p>
		<Preview src="./Grid8.svelte">
			<div class="custom-class">
				<Grid8 />
			</div>
		</Preview>
	</Doc>

	<Doc title="Nesting">
		<p slot="description">
			To nest your content with the default grid, add a new <code>row</code> and set of
			<code>colSm="1~12"</code>
			columns within an existing <code>colSm="1~12"</code>
			column. Nested rows should include a set of columns that add up to 12 or fewer (it is not required
			that you use all 12 available columns).
		</p>
		<Preview src="./Grid9.svelte">
			<div class="custom-class">
				<Grid9 />
			</div>
		</Preview>
	</Doc>
</Page>

<style>
	.custom-class :global([class*='y-el-col']) {
		background-color: rgba(238, 130, 238, 0.1);
		border: 1px solid rgba(238, 130, 238, 0.5);
		text-align: center;
		padding-top: 0.75rem;
		padding-bottom: 0.75rem;
	}
	.custom-class :global([class*='y-el-row']) {
		margin-bottom: 0.75rem;
	}
</style>
