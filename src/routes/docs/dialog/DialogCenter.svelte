<script>
	import {
		Button,
		Dialog,
		DialogBody,
		DialogClose,
		DialogContent,
		DialogFooter,
		DialogHeader,
		DialogTitle,
	} from 'yesvelte'

	let open = false
</script>

<Button on:click={() => (open = true)} color="primary">Open Centered Dialog</Button>

<Dialog placement="center" bind:open>
	<DialogContent>
		<DialogHeader>
			<DialogTitle>Dialog title</DialogTitle>
			<DialogClose />
		</DialogHeader>
		<DialogBody>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi beatae delectus deleniti dolorem eveniet
			facere fuga iste nemo nesciunt nihil odio perspiciatis, quia quis reprehenderit sit tempora totam unde.
		</DialogBody>
		<DialogFooter>
			<Button class="me-auto" on:click={() => (open = false)}>Close</Button>
			<Button color="primary" on:click={() => (open = false)}>Save changes</Button>
		</DialogFooter>
	</DialogContent>
</Dialog>
