<script>
	import { Radio } from 'yesvelte'

	let clicked = 0
</script>

<Radio onclick={() => (clicked += 1)} label="Click Me!" />
clicked: {clicked}
