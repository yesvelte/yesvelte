<script>
	import { FormSwitch } from 'yesvelte'

	let clicked = 0
</script>

<FormSwitch label="Click Me!" on:click={() => (clicked += 1)} />
clicked: {clicked}
