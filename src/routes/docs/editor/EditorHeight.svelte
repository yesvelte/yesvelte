<script>
	import { Editor, El } from 'yesvelte'

	let value = '<p>Hello <b>World</b>!</p>'
</script>

<El>Extra large Height:</El>
<Editor bind:value height="xl" />
