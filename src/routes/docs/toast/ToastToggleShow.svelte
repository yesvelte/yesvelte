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

<Toast {show}>
	<ToastHeader>
		<Avatar size="xs">
			<El tag="img" src="/images/avatar.png" />
		</Avatar>
		<strong class="me-auto ms-2">Mallory Hulme</strong>
		<small>11 mins ago</small>
	</ToastHeader>
	<ToastBody>
		<div>Hello, world! This is a toast message.</div>
	</ToastBody>
</Toast>
