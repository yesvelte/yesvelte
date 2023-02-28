<script>
	import { Button, Modal, ModalBody, ModalFooter } from 'yesvelte'

	let show = false
</script>

<Button on:click={() => (show = true)} color="primary">Open Persistent Modal</Button>

<Modal persistent bind:show title="Modal title">
	<ModalBody>
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi beatae delectus
		deleniti dolorem eveniet facere fuga iste nemo nesciunt nihil odio perspiciatis, quia quis
		reprehenderit sit tempora totam unde.
	</ModalBody>
	<ModalFooter>
		<Button class="me-auto" on:click={() => (show = false)}>Close</Button>
		<Button color="primary" on:click={() => (show = false)}>Save changes</Button>
	</ModalFooter>
</Modal>
