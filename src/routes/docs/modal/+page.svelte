<script>
	import { Doc, Preview, Page } from '$components'
	import ModalAbsolute from './ModalAbsolute.svelte'
	import ModalAlert from './ModalAlert.svelte'
	import ModalCenter from './ModalCenter.svelte'
	import ModalDefault from './ModalDefault.svelte'
	import ModalLarge from './ModalLarge.svelte'
	import ModalNoBackdrop from './ModalNoBackdrop.svelte'
	import ModalPersistent from './ModalPersistent.svelte'
	import ModalScrollable from './ModalScrollable.svelte'
	import ModalSmall from './ModalSmall.svelte'
</script>

<Page
	title="Modal"
	description="The Modal component is a basic way to present content above an enclosing view.">
	<Doc title="Default">
		<Preview src="./ModalDefault.svelte">
			<ModalDefault />
		</Preview>
	</Doc>

	<Doc title="Absolute">
		<Preview src="./ModalAbsolute.svelte">
			<div class="custom-class">
				<ModalAbsolute />
			</div>
		</Preview>
	</Doc>

	<Doc title="Alert">
		<Preview src="./ModalAlert.svelte">
			<div class="custom-class">
				<ModalAlert />
			</div>
		</Preview>
	</Doc>

	<Doc title="Persistent">
		<p slot="description">Modal will stay open If user clicks outside modal.</p>
		<Preview src="./ModalPersistent.svelte">
			<ModalPersistent />
		</Preview>
	</Doc>

	<Doc title="Scrollable">
		<p slot="description">
			You can make modal's content scrollable using <code>scrollable</code> prop.
		</p>
		<Preview src="./ModalScrollable.svelte">
			<ModalScrollable />
		</Preview>
	</Doc>

	<Doc title="Size">
		<p slot="description">Modal also supports Small and Large sizes.</p>
		<Preview src="./ModalLarge.svelte">
			<ModalLarge />
		</Preview>

		<Preview src="./ModalSmall.svelte">
			<ModalSmall />
		</Preview>
	</Doc>

	<Doc title="Centered Modal">
		<p slot="description">
			set <code>placement</code> property to <code>center </code> to vertically center the Modal.
		</p>
		<Preview src="./ModalCenter.svelte">
			<ModalCenter />
		</Preview>
	</Doc>

	<Doc title="Without Backdrop">
		<p slot="description">Disables the backgruond dimming effect.</p>
		<Preview src="./ModalNoBackdrop.svelte">
			<div class="custom-class">
				<ModalNoBackdrop />
			</div>
		</Preview>
	</Doc>
</Page>

<style>
	.custom-class {
		height: 400px;
	}
</style>
