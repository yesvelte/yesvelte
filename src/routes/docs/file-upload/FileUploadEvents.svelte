<script>
	import { FileUpload } from 'yesvelte'

	let clicked = 0
	let changed = 0
</script>

<FileUpload on:click={() => (clicked += 1)} placeholder="Click me!" />
clicked: {clicked}
<br />

<FileUpload mt="2" on:change={() => (changed += 1)} placeholder="Change value!" />

changed: {changed}
