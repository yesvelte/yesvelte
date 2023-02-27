<script>
	import { Button, Modal, ModalBody, ModalFooter } from 'yesvelte'

	let showCenter = false
	let showTop = false
</script>

<Button on:click={() => (showCenter = true)} color="primary">Center</Button>
<Button on:click={() => (showTop = true)} color="primary">Top</Button>

<Modal title="Center Modal" placement="center" bind:show={showCenter}>
	<ModalBody>This modal is placed in the center of the screen.</ModalBody>
	<ModalFooter>
		<Button color="primary" on:click={() => (showCenter = false)}>OK</Button>
	</ModalFooter>
</Modal>

<Modal title="Center Modal" bind:show={showTop}>
	<ModalBody>
		This modal is placed in the top of the screen. You can change the placement by setting the
		<code>placement</code> prop to <code>top</code>. Default placement is <code>top</code>.
	</ModalBody>
	<ModalFooter>
		<Button color="primary" on:click={() => (showTop = false)}>OK</Button>
	</ModalFooter>
</Modal>
