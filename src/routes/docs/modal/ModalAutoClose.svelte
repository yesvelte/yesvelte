<script>
	import { Button, Modal, ModalBody, ModalFooter } from 'yesvelte'
	let show = $state(false)
	let show2 = $state(false)
	const toggleWithoutBackdrop = () => (show = !show)
	const toggleWithBackdrop = () => (show2 = !show2)
</script>

<Button color="primary" onclick={toggleWithoutBackdrop}>AutoClose</Button>
<Button color="primary" onclick={toggleWithBackdrop}>AutoClose without backdrop</Button>

<Modal title="With backdrop" autoClose backdrop={false} bind:show={show2}>
	<ModalBody>
		This is an autoClose modal without backdrop. Click outside of the modal to close it.
	</ModalBody>
	<ModalFooter>
		<Button color="primary" onclick={() => (show = false)}>OK</Button>
	</ModalFooter>
</Modal>

<Modal title="Without backdrop" autoClose backdrop bind:show>
	<ModalBody>
		This is an autoClose modal with backdrop. Click outside of the modal to close it.
	</ModalBody>
	<ModalFooter>
		<Button color="primary" onclick={() => (show = false)}>OK</Button>
	</ModalFooter>
</Modal>
