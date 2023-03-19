<script>
	import { Switch } from 'yesvelte'

	let clicked = 0
</script>

<Switch on:click={() => (clicked += 1)} text="Click Me!" />
clicked: {clicked}
