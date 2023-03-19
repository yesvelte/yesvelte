<script lang="ts">
	import {
		Button,
		ToastContainer,
		ToastBody,
		Toast,
		ToastHeader,
		FormSelect,
		Avatar,
		El,
	} from 'yesvelte'

	let placements = [
		'top',
		'bottom',
		'middle',
		'top-start',
		'top-end',
		'bottom-start',
		'bottom-end',
		'middle-start',
		'middle-end',
	]

	let length = 0
	function addToast() {
		length += 1
	}

	let placement: any = 'top'
</script>

<El row my="3">
	<El col="3">
		<Button color="primary" on:click={addToast}>Add Toast</Button>
	</El>
	<FormSelect
		col="3"
		ms="auto"
		items={placements}
		placeholder="Choose placement"
		bind:value={placement} />
</El>

<ToastContainer {placement}>
	{#each Array.from({ length }) as item}
		<Toast show>
			<ToastHeader>
				<Avatar size="xs">
					<El tag="img" src="/images/avatar.png" />
				</Avatar>
				<El fontWeight="bold" me="auto" ms="2">Mallory Hulme</El>
				<El fontSize="4">7 mins ago</El>
			</ToastHeader>
			<ToastBody>This is another toast message.</ToastBody>
		</Toast>
	{/each}
</ToastContainer>
