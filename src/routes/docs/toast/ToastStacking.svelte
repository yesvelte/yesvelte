<script>
	import { ToastContainer, ToastBody, Toast, ToastHeader, Avatar, El } from 'yesvelte'
</script>

<ToastContainer>
	<Toast show>
		<ToastHeader>
			<Avatar size="xs">
				<El tag="img" src="/images/avatar.png" />
			</Avatar>
			<strong class="me-auto ms-2">Dunn Slane</strong>
			<small>11 mins ago</small>
		</ToastHeader>
		<ToastBody>
			<div>Hello, world! This is a toast message.</div>
		</ToastBody>
	</Toast>
	<Toast show>
		<ToastHeader>
			<Avatar size="xs">
				<El tag="img" src="/images/avatar.png" />
			</Avatar>
			<strong class="me-auto ms-2">Mallory Hulme</strong>
			<small>7 mins ago</small>
		</ToastHeader>
		<ToastBody>
			<div>This is another toast message.</div>
		</ToastBody>
	</Toast>
</ToastContainer>
