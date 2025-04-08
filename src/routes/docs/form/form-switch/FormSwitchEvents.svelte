<script>
	import { FormSwitch } from 'yesvelte'

	let clicked = $state(0)
</script>

<FormSwitch label="Click Me!" onclick={() => (clicked += 1)} />
clicked: {clicked}
