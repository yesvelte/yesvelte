<script>
	import { Button, El, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle } from 'yesvelte'

	let show = false
</script>

<Button on:click={() => (show = !show)} color="primary">Open Modal</Button>

<Modal bind:show>
	<img src="/images/road.png" alt="Road" />
	<ModalHeader>
		<ModalTitle>
			<i>Italic Header</i>
		</ModalTitle>
	</ModalHeader>
	<ModalBody>
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi beatae delectus
		deleniti dolorem eveniet facere fuga iste nemo nesciunt nihil odio perspiciatis, quia quis
		reprehenderit sit tempora totam unde.
	</ModalBody>
	<ModalFooter>
		<Button me="auto" on:click={() => (show = false)}>Close</Button>
		<Button color="primary" on:click={() => (show = false)}>OK</Button>
	</ModalFooter>
</Modal>
