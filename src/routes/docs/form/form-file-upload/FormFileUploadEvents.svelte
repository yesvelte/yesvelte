<script>
	import { FormFileUpload } from 'yesvelte'

	let clicked = $state(0)
</script>

<FormFileUpload onclick={() => (clicked += 1)} placeholder="Click me!" />

clicked: {clicked}
