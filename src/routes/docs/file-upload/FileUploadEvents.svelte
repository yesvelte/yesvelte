<script>
	import { FileUpload } from 'yesvelte'

	let clicked = 0
</script>

<FileUpload on:click={() => (clicked += 1)} placeholder="Click me!" />

clicked: {clicked}
