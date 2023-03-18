<script>
	import { Input } from 'yesvelte'

	let clicked = 0
</script>

<Input on:click={() => (clicked += 1)} placeholder="Click Me!" />
clicked: {clicked}
