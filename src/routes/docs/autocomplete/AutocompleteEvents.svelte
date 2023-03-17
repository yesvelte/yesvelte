<script>
	import { Autocomplete } from 'yesvelte'

	let clicked = 0
</script>

<Autocomplete on:click={() => (clicked += 1)} placeholder="Click Me!" />

clicked: {clicked}
