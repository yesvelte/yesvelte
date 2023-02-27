<script>
	import El from '$lib/el/El.svelte'
	import { Button, Icon, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle } from 'yesvelte'

	let open = false
</script>

<Button on:click={() => (open = true)} color="primary">Open Modal</Button>

<Modal bind:open>
	<El tag="img" src="/images/road.png" />
	<ModalHeader>
		<ModalTitle>Modal with Image & custom header</ModalTitle>
		<Icon name="plus" />
	</ModalHeader>
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
