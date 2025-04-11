<script>
	import { Button, Modal, ModalBody, ModalFooter } from 'yesvelte'

	let show = $state(false)
</script>

<Button onclick={() => (show = !show)} color="primary">Dismissble</Button>

<Modal title="Dismissible Modal" bind:show dismissible>
	<ModalBody>This modal is dismissible and X on top-right corener button is visible.</ModalBody>
	<ModalFooter>
		<Button me="auto" onclick={() => (show = false)}>Close</Button>
		<Button color="primary">Save changes</Button>
	</ModalFooter>
</Modal>
