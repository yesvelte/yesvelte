<script>
	import { Select } from 'yesvelte'

	let clicked = 0
</script>

<Select on:click={() => (clicked += 1)} placeholder="Click Me!" />
clicked: {clicked}
