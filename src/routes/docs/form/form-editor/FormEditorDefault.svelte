<script>
	import { FormEditor, El } from 'yesvelte'

	let value = '<p>Hello <b>World</b>!</p>'
</script>

<FormEditor label="Editor" bind:value />

<El mt="3" border>
	{@html value}
</El>
