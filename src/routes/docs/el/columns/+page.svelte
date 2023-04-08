<script lang="ts">
	import { Page, Doc, Preview } from '$components'

	import ColumnsAlignItems from './ColumnsAlignItems.svelte'
	import ColumnsAlignSelf from './ColumnsAlignSelf.svelte'
	import ColumnsBreaks from './ColumnsBreaks.svelte'
	import ColumnsHorizontalAlignment from './ColumnsHorizontalAlignment.svelte'
	import ColumnsMargins from './ColumnsMargins.svelte'
	import ColumnsOffsets from './ColumnsOffsets.svelte'
	import ColumnsOrders from './ColumnsOrders.svelte'
	import ColumnsStandalone from './ColumnsStandalone.svelte'
	import ColumnsWrapping from './ColumnsWrapping.svelte'
</script>

<Page title="Columns" description="Columns are used to create a responsive grid system.">
	<Doc title="Align items">
		<p slot="description">
			<code>alignItems</code> prop is used to align columns vertically. It can be set to
			<code>start</code>,
			<code>center</code>
			or <code>end</code>.
		</p>
		<Preview src="./ColumnsAlignItems.svelte">
			<div class="custom-class custom-class-expanded-row">
				<ColumnsAlignItems />
			</div>
		</Preview>
	</Doc>

	<Doc title="Align self">
		<p slot="description">
			<code>alignSelf</code> prop is used to align columns vertically. It can be set to
			<code>start</code>,
			<code>center</code>
			or <code>end</code>.
		</p>
		<Preview src="./ColumnsAlignSelf.svelte">
			<div class="custom-class custom-class-expanded-row">
				<ColumnsAlignSelf />
			</div>
		</Preview>
	</Doc>

	<Doc title="Horizontal alignment">
		<Preview src="./ColumnsHorizontalAlignment.svelte">
			<div class="custom-class">
				<ColumnsHorizontalAlignment />
			</div>
		</Preview>
	</Doc>

	<Doc title="Column wrapping">
		<p slot="description">
			If more than 12 columns are placed within a single row, each group of extra columns will, as
			one unit, wrap onto a new line.
		</p>
		<Preview src="./ColumnsWrapping.svelte">
			<div class="custom-class">
				<ColumnsWrapping />
			</div>
		</Preview>
	</Doc>

	<Doc title="Column breaks">
		<p slot="description">
			Breaking columns to a new line in flexbox requires a small hack: add an element with
			<code>w-100</code>
			property wherever you want to wrap your columns to a new line. Normally this is accomplished with
			multiple <code>rows</code>, but not every implementation method can account for this.
			<br />
			You may also apply this break at specific breakpoints.
		</p>
		<Preview src="./ColumnsBreaks.svelte">
			<div class="custom-class">
				<ColumnsBreaks />
			</div>
		</Preview>
	</Doc>

	<Doc title="Reordering">
		<p slot="description">
			Use <code>order</code> prop to change the order of your content. Values are
			<code>'1' | '2' | '3' | '4' | '5' | 'first' | 'last'</code>.
		</p>
		<Preview src="./ColumnsOrders.svelte">
			<div class="custom-class">
				<ColumnsOrders />
			</div>
		</Preview>
	</Doc>

	<Doc title="Offsetting columns">
		<Preview src="./ColumnsOffsets.svelte">
			<div class="custom-class">
				<ColumnsOffsets />
			</div>
		</Preview>
	</Doc>

	<Doc title="Margins">
		<Preview src="./ColumnsMargins.svelte">
			<div class="custom-class">
				<ColumnsMargins />
			</div>
		</Preview>
	</Doc>

	<Doc title="Standalone column classes">
		<Preview src="./ColumnsStandalone.svelte">
			<div class="custom-class">
				<ColumnsStandalone />
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
	.custom-class-expanded-row :global([class*='y-el-row']) {
		min-height: 5rem;
		background-color: rgba(238, 130, 238, 0.05);
		border: 1px solid rgba(238, 130, 238, 0.2);
	}
</style>
