<script>
	import { Button, Modal, ModalBody, ModalFooter } from 'yesvelte'

	let show = false
</script>

<Button on:click={() => (show = !show)} color="primary">Open Modal</Button>

<Modal title="Modal title" bind:show>
	<ModalBody>
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi beatae delectus
		deleniti dolorem eveniet facere fuga iste nemo nesciunt nihil odio perspiciatis, quia quis
		reprehenderit sit tempora totam unde.
	</ModalBody>
	<ModalFooter>
		<Button me="auto" on:click={() => (show = false)}>Close</Button>
		<Button color="primary">Save changes</Button>
	</ModalFooter>
</Modal>
