<script>
	import { Input } from 'yesvelte'

	let clicked = $state(0)
</script>

<Input onclick={() => (clicked += 1)} placeholder="Click Me!" />
clicked: {clicked}
