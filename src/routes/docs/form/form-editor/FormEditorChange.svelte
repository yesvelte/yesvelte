<script lang="ts">
	import { FormEditor, El } from 'yesvelte'

	let change: string = $state('')
	let value = $state('<p>Hello <b>World</b>!</p>')
</script>

<FormEditor label="Change Event" bind:value onchanged={(event) => (change = event)} />

<El mt="3" border>
	<El tag="h2">Content changed to:</El>
	{JSON.stringify(change)}
</El>
