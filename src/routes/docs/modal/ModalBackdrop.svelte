<script>
	import { Button, Modal, ModalBody, ModalFooter } from 'yesvelte'

	let show = false
</script>

<Button on:click={() => (show = true)} color="primary">Without Backdrop</Button>

<Modal title="Without backdrop" backdrop={false} bind:show>
	<ModalBody>This is a modal without backdrop. Click outside of the modal to close it.</ModalBody>
	<ModalFooter>
		<Button color="primary" on:click={() => (show = false)}>OK</Button>
	</ModalFooter>
</Modal>
