<script>
	import { Button, Modal, ModalBody, ModalFooter } from 'yesvelte'

	let showLarge = false
	let showMedium = false
	let showSmall = false
</script>

<Button on:click={() => (showLarge = true)} color="primary">Large Modal</Button>
<Button on:click={() => (showMedium = true)} color="primary">Medium Modal</Button>
<Button on:click={() => (showSmall = true)} color="primary">Small Modal</Button>

<Modal title="Large Modal" size="lg" bind:show={showLarge}>
	<ModalBody>This is a <b>large modal.</b></ModalBody>
	<ModalFooter>
		<Button color="primary" on:click={() => (showLarge = false)}>OK</Button>
	</ModalFooter>
</Modal>

<Modal title="Medium Modal" size="md" bind:show={showMedium}>
	<ModalBody>This is a <b>medium modal.</b></ModalBody>
	<ModalFooter>
		<Button color="primary" on:click={() => (showMedium = false)}>OK</Button>
	</ModalFooter>
</Modal>

<Modal title="Small Modal" size="sm" bind:show={showSmall}>
	<ModalBody>This is a <b>small modal.</b></ModalBody>
	<ModalFooter>
		<Button color="primary" on:click={() => (showSmall = false)}>OK</Button>
	</ModalFooter>
</Modal>
