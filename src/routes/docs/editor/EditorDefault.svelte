<script>
	import { Editor, El } from 'yesvelte'

	let value = '<p>Hello <b>World</b>!</p>'
</script>

<Editor bind:value />

<El mt="3" border>
	{@html value}
</El>
