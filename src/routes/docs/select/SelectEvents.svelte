<script>
	import { Select } from 'yesvelte'

	let clicked = 0
</script>

<Select onclick={() => (clicked += 1)} placeholder="Click Me!" />
clicked: {clicked}
