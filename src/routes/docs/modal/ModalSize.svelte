<script>
	import { Button, Modal, ModalBody, ModalFooter } from 'yesvelte'

	let showLarge = $state(false)
	let showMedium = $state(false)
	let showSmall = $state(false)
</script>

<Button onclick={() => (showLarge = true)} color="primary">Large Modal</Button>
<Button onclick={() => (showMedium = true)} color="primary">Medium Modal</Button>
<Button onclick={() => (showSmall = true)} color="primary">Small Modal</Button>

<Modal title="Large Modal" size="lg" bind:show={showLarge}>
	<ModalBody>This is a <b>large modal.</b></ModalBody>
	<ModalFooter>
		<Button color="primary" onclick={() => (showLarge = false)}>OK</Button>
	</ModalFooter>
</Modal>

<Modal title="Medium Modal" size="md" bind:show={showMedium}>
	<ModalBody>This is a <b>medium modal.</b></ModalBody>
	<ModalFooter>
		<Button color="primary" onclick={() => (showMedium = false)}>OK</Button>
	</ModalFooter>
</Modal>

<Modal title="Small Modal" size="sm" bind:show={showSmall}>
	<ModalBody>This is a <b>small modal.</b></ModalBody>
	<ModalFooter>
		<Button color="primary" onclick={() => (showSmall = false)}>OK</Button>
	</ModalFooter>
</Modal>
