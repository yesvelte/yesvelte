<script>
	import { Button, Modal, ModalBody, ModalFooter } from 'yesvelte'

	let show = false
</script>

<Button on:click={() => (show = !show)} color="primary">Dismissble</Button>

<Modal title="Dismissible Modal" bind:show dismissible>
	<ModalBody>This modal is dismissible and X on top-right corener button is visible.</ModalBody>
	<ModalFooter>
		<Button me="auto" on:click={() => (show = false)}>Close</Button>
		<Button color="primary">Save changes</Button>
	</ModalFooter>
</Modal>
