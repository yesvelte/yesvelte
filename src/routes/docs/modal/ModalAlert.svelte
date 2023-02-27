<script>
	import { El, Button, Modal, ModalBody, ModalFooter, Icon } from 'yesvelte'
</script>

<Modal size="sm" absolute open dismissible>
	<ModalBody>
		<div class="centered">
			<Icon size="3x" color="danger" name="alert-triangle" />
			<El tag="h3">Are you sure?</El>
			<El textMuted>Do you really want to remove 84 files? What you've done cannot be undone.</El>
		</div>
	</ModalBody>
	<ModalFooter row>
		<Button col>Cancel</Button>
		<Button col color="danger">Delete 84 Items</Button>
	</ModalFooter>
</Modal>

<style>
	.centered {
		text-align: center;
	}
</style>
