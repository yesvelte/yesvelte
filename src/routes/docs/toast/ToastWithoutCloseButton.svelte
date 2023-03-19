<script>
	import { ToastBody, Toast, ToastHeader, Avatar, El } from 'yesvelte'
</script>

<Toast show>
	<ToastHeader showCloseButton={false}>
		<Avatar size="xs">
			<El tag="img" src="/images/avatar.png" />
		</Avatar>
		<El tag="strong" me=auto ms="2">Mallory Hulme</El>
		<El tag="small">11 mins ago</El>
	</ToastHeader>
	<ToastBody>
		Hello, world! This is a toast message.
	</ToastBody>
</Toast>
