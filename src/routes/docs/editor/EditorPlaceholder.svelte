<script>
	import { Editor, El } from 'yesvelte'

	let value = ''
</script>

<Editor bind:value placeholder="Write something about Yourself...." />

<El border mt="3">
	{@html value}
</El>
