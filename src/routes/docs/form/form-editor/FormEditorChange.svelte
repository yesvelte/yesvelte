<script lang="ts">
	import { FormEditor, El } from 'yesvelte'

	let change: string = ''
	let value = '<p>Hello <b>World</b>!</p>'
</script>

<FormEditor label="Change Event" bind:value on:changed={(event) => (change = event.detail)} />

<El mt="3" border>
	<El tag="h2">Content changed to:</El>
	{JSON.stringify(change)}
</El>
