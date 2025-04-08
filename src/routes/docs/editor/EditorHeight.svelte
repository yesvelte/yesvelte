<script>
	import { Editor, El } from 'yesvelte'

	let value = $state('<p>Hello <b>World</b>!</p>')
</script>

<El>Extra large Height:</El>
<Editor bind:value height="xl" />
