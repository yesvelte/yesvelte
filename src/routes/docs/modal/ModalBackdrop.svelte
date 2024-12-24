<script>
	import { Button, Modal, ModalBody, ModalFooter } from 'yesvelte'

	let show = $state(false)
</script>

<Button onclick={() => (show = true)} color="primary">Without Backdrop</Button>

<Modal title="Without backdrop" autoClose backdrop={false} bind:show>
	<ModalBody>This is a modal without backdrop. Click outside of the modal to close it.</ModalBody>
	<ModalFooter>
		<Button color="primary" onclick={() => (show = false)}>OK</Button>
	</ModalFooter>
</Modal>
