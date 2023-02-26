<script>
	import { Doc, Preview, Page } from '$components'
	import DialogAbsolute from './DialogAbsolute.svelte'
	import DialogCenter from './DialogCenter.svelte'
	import DialogDefault from './DialogDefault.svelte'
	import DialogLarge from './DialogLarge.svelte'
	import DialogNoBackdrop from './DialogNoBackdrop.svelte'
	import DialogPersistent from './DialogPersistent.svelte'
	import DialogScrollable from './DialogScrollable.svelte'
	import DialogSmall from './DialogSmall.svelte'
</script>

<Page
	title="Dialog"
	description="The Dialog component is a basic way to present content above an enclosing view.">
	<Doc title="Default">
		<!--  -->
	</Doc>
	<Preview src="./DialogDefault.svelte">
		<DialogDefault />
	</Preview>

	<Doc title="Absolute">
		<!--  -->
		<Preview src="./DialogAbsolute.svelte">
			<div class="custom-height">
				<DialogAbsolute />
			</div>
		</Preview>
	</Doc>

	<Doc title="Persistent">
		<Preview src="./DialogPersistent.svelte">
			<DialogPersistent />
		</Preview>
	</Doc>

	<Doc title="Scrollable">
		<p slot="description">
			You can make dialog's content scrollable using <code>scrollable</code> prop.
		</p>
		<Preview src="./DialogScrollable.svelte">
			<DialogScrollable />
		</Preview>
	</Doc>

	<Doc title="Size">
		<p slot="description">Dialog also supports Small and Large sizes.</p>
		<Preview src="./DialogLarge.svelte">
			<DialogLarge />
		</Preview>

		<Preview src="./DialogSmall.svelte">
			<DialogSmall />
		</Preview>
	</Doc>

	<Doc title="Centered Dialog">
		<p slot="description">
			set <code>placement</code> property to <code>center </code> to vertically center the Dialog.
		</p>
		<Preview src="./DialogCenter.svelte">
			<DialogCenter />
		</Preview>
	</Doc>

	<Doc title="Without Backdrop">
		<p slot="description">Disables the backgruond dimming effect.</p>
		<Preview src="./DialogNoBackdrop.svelte">
			<div class="custom-height">
				<DialogNoBackdrop />
			</div>
		</Preview>
	</Doc>
</Page>

<style>
	.custom-height {
		height: 400px;
	}
</style>
