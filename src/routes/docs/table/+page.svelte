<script>
	import { Doc, Preview } from '$lib/docs-components'
	import TableBorder from './TableBorder.svelte'
	import TableBorderless from './TableBorderless.svelte'
	import TableDefault from './TableDefault.svelte'
	import TableHover from './TableHover.svelte'
	import TableTruncate from './TableTruncate.svelte'
	import TableStriped from './TableStriped.svelte'
	import TableResponsive from './TableResponsive.svelte'
	import TableColors from './TableColors.svelte'
	import TableSort from './TableSort.svelte'
</script>

<h1>Tables</h1>
<p>
	Tables are a useful interface element that allows to visualise data and arrange it in a clear way. Thanks to that,
	users can browse a lot of information at once and a good table design will help you take care of its clarity.
</p>

<Doc title="Basic Table">Table component has basic styles.</Doc>
<Preview src="./TableDefault.svelte">
	<div class="custom-class"><TableDefault /></div>
</Preview>

<Doc title="Bordered Tables">You can add borders for table rows using <code>border</code> prop.</Doc>
<Preview src="./TableBorder.svelte">
	<div class="custom-class"><TableBorder /></div>
</Preview>

<Doc title="Borderless Tables">You can disable borders by setting border to 0.</Doc>
<Preview src="./TableBorderless.svelte">
	<div class="custom-class"><TableBorderless /></div>
</Preview>

<Doc title="Hover effect">Table rows can change it's color if yo hover on them.</Doc>
<Preview src="./TableHover.svelte">
	<div class="custom-class"><TableHover /></div>
</Preview>

<Doc title="Truncate cells">TODO</Doc>
<Preview src="./TableTruncate.svelte">
	<div class="custom-class"><TableTruncate /></div>
</Preview>

<Doc title="Striped Tables">
	You can change colors of Even/Odd rows by adding <code>striped</code> prop.
</Doc>
<Preview src="./TableStriped.svelte">
	<div class="custom-class"><TableStriped /></div>
</Preview>

<Doc title="Responsive Tables">TODO</Doc>
<Preview src="./TableResponsive.svelte">
	<div class="custom-class"><TableResponsive /></div>
</Preview>

<Doc title="Table Colors">TODO</Doc>
<Preview src="./TableColors.svelte">
	<div class="custom-class"><TableColors /></div>
</Preview>

<Doc title="Sortable Table">TODO</Doc>
<Preview src="./TableSort.svelte">
	<div class="custom-class"><TableSort /></div>
</Preview>

<style>
	.custom-class > :global(.u-table-parent) {
		overflow-x: auto;
	}
</style>
