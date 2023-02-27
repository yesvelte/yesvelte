<script>
	import { Button, Modal, ModalBody, ModalFooter } from 'yesvelte'

	let open = false
</script>

<Button on:click={() => (open = true)} color="primary">Open Large Modal</Button>

<Modal dismissible title="Modal title" size="lg" bind:open>
	<ModalBody>
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi beatae delectus
		deleniti dolorem eveniet facere fuga iste nemo nesciunt nihil odio perspiciatis, quia quis
		reprehenderit sit tempora totam unde.
	</ModalBody>
	<ModalFooter>
		<Button class="me-auto" on:click={() => (open = false)}>Close</Button>
		<Button color="primary" on:click={() => (open = false)}>Save changes</Button>
	</ModalFooter>
</Modal>
