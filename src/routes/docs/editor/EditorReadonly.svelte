<script>
	import { Editor, El } from 'yesvelte'

	let value = '<p>Hello <b>World</b>!</p>'
</script>

<Editor bind:value readonly />

<El border mt="3">
	{@html value}
</El>
