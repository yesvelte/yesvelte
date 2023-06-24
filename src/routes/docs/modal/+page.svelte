<script>
	import { Doc, Preview, Page } from '$components'
	import ModalAbsolute from './ModalAbsolute.svelte'
	import ModalAlert from './ModalAlert.svelte'
	import ModalPlacement from './ModalPlacement.svelte'
	import ModalDefault from './ModalDefault.svelte'
	import ModalHeaderMedia from './ModalHeaderMedia.svelte'
	import ModalSize from './ModalSize.svelte'
	import ModalBackdrop from './ModalBackdrop.svelte'
	import ModalScrollable from './ModalScrollable.svelte'
	import ModalDismissible from './ModalDismissible.svelte'
	import ModalAutoClose from './ModalAutoClose.svelte'
</script>

<Page
	title="Modal"
	description="The Modal component is a basic way to present content above an enclosing view.">
	<Doc title="Default">
		<p slot="description">
			<code>ModalBody</code> component is used to add body content. <code>ModalFooter</code>
			component is usually used to add actions in the model's footer.
		</p>
		<Preview src="./ModalDefault.svelte">
			<ModalDefault />
		</Preview>
	</Doc>
	<Doc title="Dismissible">
		<p slot="description">
			You can enable X button on top-right corner by setting <code>dismissible</code> prop to
			<code>true</code>.
		</p>
		<Preview src="./ModalDismissible.svelte">
			<ModalDismissible />
		</Preview>
	</Doc>
	<Doc title="Header">
		<p slot="description">
			Customize header by adding <code>ModalHeader</code> component inside modal. Also, you can add
			<code>ModalTitle</code>
			component inside <code>ModalHeader</code> to add title.
		</p>
		<Preview src="./ModalHeaderMedia.svelte">
			<ModalHeaderMedia />
		</Preview>
	</Doc>

	<Doc title="Alert">
		<Preview src="./ModalAlert.svelte">
			<ModalAlert />
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
		<p slot="description">
			You can set modal's size using <code>size</code> prop. Available sizes are <code>sm</code>,
			<code>md</code> and <code>lg</code>. Default size is <code>md</code>.
		</p>
		<Preview src="./ModalSize.svelte">
			<ModalSize />
		</Preview>
	</Doc>

	<Doc title="Placement">
		<p slot="description">
			Set <code>placement</code> property to <code>center </code> to vertically center the Modal.
			Default value is <code>top</code>.
		</p>
		<Preview src="./ModalPlacement.svelte">
			<ModalPlacement />
		</Preview>
	</Doc>

	<Doc title="AutoClose">
		<p slot="description">
			Set <code>AutoClose</code> property to <code>true</code> to close Modal when Escape key pressed
			or clicked outside.
		</p>
		<Preview src="./ModalAutoClose.svelte">
			<ModalAutoClose />
		</Preview>
	</Doc>

	<Doc title="Backdrop">
		<p slot="description">
			Disables the backgruond dimming effect by setting <code>backdrop</code> property to
			<code>false</code>.
		</p>
		<Preview src="./ModalBackdrop.svelte">
			<ModalBackdrop />
		</Preview>
	</Doc>

	<Doc title="Absolute">
		<Preview src="./ModalAbsolute.svelte">
			<div class="custom-class">
				<ModalAbsolute />
			</div>
		</Preview>
	</Doc>
</Page>

<style>
	.custom-class {
		height: 300px;
	}
</style>
