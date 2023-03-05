<script>
	import { Page, Doc, Preview } from '$components'
	import OffcanvasDefault from './OffcanvasDefault.svelte'
	import OffcanvasPlacements from './OffcanvasPlacements.svelte'
	import OffcanvasBackdrop from './OffcanvasBackdrop.svelte'
	import OffcanvasAutoClose from './OffcanvasAutoClose.svelte'
	import OffcanvasNoScroll from './OffcanvasNoScroll.svelte'
</script>

<Page
	title="Offcanvas"
	description="Build hidden sidebars into your project for navigation, shopping carts, and more using Offcanvas.">
	<Doc title="Show">
		<p slot="description">
			You can control the visibility of the Offcanvas by using the <code>show</code> property.
		</p>
		<Preview src="./OffcanvasDefault.svelte">
			<div class="custom-class"><OffcanvasDefault /></div>
		</Preview>
	</Doc>

	<Doc title="Placement">
		<p slot="description">
			<code>placement</code> property can be <code>top</code>, <code>right</code>,
			<code>bottom</code>
			or <code>left</code>.
		</p>
		<Preview src="./OffcanvasPlacements.svelte">
			<div class="custom-class"><OffcanvasPlacements /></div>
		</Preview>
	</Doc>

	<Doc title="Backdrop">
		<p slot="description">
			<code>backdrop</code> property will activate a backdrop behind Offcanvas.
		</p>
		<Preview src="./OffcanvasBackdrop.svelte">
			<div class="custom-class"><OffcanvasBackdrop /></div>
		</Preview>
	</Doc>

	<Doc title="AutoClose">
		<p slot="description">
			<code>autoClose</code> property enables Offcanvas automatically being closed by pressing
			<i>Escape</i>
			key or clicking outside of the Offcanvas component. User can close the Offcanvas by clicking on
			the backdrop if <code>backdrop</code>
			property is set to <code>true</code> or by pressing <i>Escape</i> key. User can also close the
			Offcanvas by clicking on the close button.
		</p>
		<Preview src="./OffcanvasAutoClose.svelte">
			<div class="custom-class"><OffcanvasAutoClose /></div>
		</Preview>
	</Doc>

	<Doc title="NoScroll">
		<p slot="description">
			<code>noScroll</code> property will disable scrolling on the body when Offcanvas is open.
		</p>
		<Preview src="./OffcanvasNoScroll.svelte">
			<div class="custom-class"><OffcanvasNoScroll /></div>
		</Preview>
	</Doc>
</Page>

<style>
	.custom-class > :global(.y-button) {
		margin: 0.25rem 0;
	}
</style>
