<script>
	import { FormEditor, El } from 'yesvelte'

	let value = '<p>Hello <b>World</b>!</p>'
</script>

<FormEditor bind:value readonly />

<El border mt="3">
	{@html value}
</El>
