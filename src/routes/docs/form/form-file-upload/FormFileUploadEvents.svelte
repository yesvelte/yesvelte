<script>
	import { FormFileUpload } from 'yesvelte'

	let clicked = 0
</script>

<FormFileUpload on:click={() => (clicked += 1)} placeholder="Click me!" />

clicked: {clicked}
