<script>
	import { ToastBody, Toast, ToastHeader, Avatar, Button, El } from 'yesvelte'
	let show = false

	function toggle() {
		show = !show
	}
</script>

<Button color="danger" on:click={toggle}>
	{show ? 'Hide' : 'Show'}
</Button>

<Toast bind:show>
	<ToastHeader>
		<Avatar size="xs">
			<El tag="img" src="/images/avatar.png" />
		</Avatar>
		<El tag="strong" me="auto" ms="2">Mallory Hulme</El>
		<El tag="small">11 mins ago</El>
	</ToastHeader>
	<ToastBody>Hello, world! This is a toast message.</ToastBody>
</Toast>
