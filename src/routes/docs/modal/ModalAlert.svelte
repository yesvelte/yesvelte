<script>
	import { El, Button, Modal, ModalBody, ModalFooter, Icon } from 'yesvelte'

	let show = false
</script>

<Button on:click={() => (show = !show)} color="primary">Open Alert</Button>

<Modal bind:show dismissible size="sm">
	<ModalBody>
		<El textAlign="center">
			<Icon size="3x" color="danger" name="alert-triangle" />
			<El tag="h3">Are you sure?</El>
			<El textMuted>Do you really want to remove 84 files? What you've done cannot be undone.</El>
		</El>
	</ModalBody>
	<ModalFooter row>
		<Button col on:click={() => (show = false)}>Cancel</Button>
		<Button col color="danger">Delete 84 Items</Button>
	</ModalFooter>
</Modal>
