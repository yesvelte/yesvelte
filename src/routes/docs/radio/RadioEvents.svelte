<script>
	import { Radio } from 'yesvelte'

	let clicked = 0
</script>

<Radio on:click={() => (clicked += 1)} label="Click Me!" />
clicked: {clicked}
