<script>
	import { Button, Modal, ModalBody, ModalFooter } from 'yesvelte'

	let show = false
</script>

<Button on:click={() => (show = !show)} color="primary">Open Scrollable Modal</Button>

<Modal scrollable title="Modal title" dismissible bind:show>
	<ModalBody>
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi beatae delectus
		deleniti dolorem eveniet facere fuga iste nemo nesciunt nihil odio perspiciatis, quia quis
		reprehenderit sit tempora totam unde.
		<br />
		<br />
		<br />
		<br />
		<br />
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi beatae delectus deleniti
		dolorem eveniet facere fuga iste nemo nesciunt nihil odio perspiciatis, quia quis reprehenderit sit
		tempora totam unde.
		<br />
		<br />
		<br />
		<br />
		<br />
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi beatae delectus deleniti
		dolorem eveniet facere fuga iste nemo nesciunt nihil odio perspiciatis, quia quis reprehenderit sit
		tempora totam unde.
		<br />
		<br />
		<br />
		<br />
		<br />
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi beatae delectus deleniti
		dolorem eveniet facere fuga iste nemo nesciunt nihil odio perspiciatis, quia quis reprehenderit sit
		tempora totam unde.
		<br />
		<br />
		<br />
		<br />
		<br />
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi beatae delectus deleniti
		dolorem eveniet facere fuga iste nemo nesciunt nihil odio perspiciatis, quia quis reprehenderit sit
		tempora totam unde.
		<br />
		<br />
		<br />
		<br />
		<br />
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi beatae delectus deleniti
		dolorem eveniet facere fuga iste nemo nesciunt nihil odio perspiciatis, quia quis reprehenderit sit
		tempora totam unde.
		<br />
		<br />
		<br />
		<br />
		<br />
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi beatae delectus deleniti
		dolorem eveniet facere fuga iste nemo nesciunt nihil odio perspiciatis, quia quis reprehenderit sit
		tempora totam unde.
		<br />
		<br />
		<br />
		<br />
		<br />
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi beatae delectus deleniti
		dolorem eveniet facere fuga iste nemo nesciunt nihil odio perspiciatis, quia quis reprehenderit sit
		tempora totam unde.
		<br />
		<br />
		<br />
		<br />
		<br />
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi beatae delectus deleniti
		dolorem eveniet facere fuga iste nemo nesciunt nihil odio perspiciatis, quia quis reprehenderit sit
		tempora totam unde.
		<br />
		<br />
		<br />
		<br />
		<br />
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi beatae delectus deleniti
		dolorem eveniet facere fuga iste nemo nesciunt nihil odio perspiciatis, quia quis reprehenderit sit
		tempora totam unde.
		<br />
		<br />
		<br />
		<br />
		<br />
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi beatae delectus deleniti
		dolorem eveniet facere fuga iste nemo nesciunt nihil odio perspiciatis, quia quis reprehenderit sit
		tempora totam unde.
		<br />
		<br />
		<br />
		<br />
		<br />
	</ModalBody>
	<ModalFooter>
		<Button class="me-auto" on:click={() => (open = false)}>Close</Button>
		<Button color="primary" on:click={() => (open = false)}>Save changes</Button>
	</ModalFooter>
</Modal>
