<script>
	import { FormEditor, El } from 'yesvelte'

	let value = ''
</script>

<FormEditor bind:value placeholder="Write something about Yourself...." />

<El border mt="3">
	{@html value}
</El>
