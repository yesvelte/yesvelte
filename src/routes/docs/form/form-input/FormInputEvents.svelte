<script>
	import { FormInput } from 'yesvelte'

	let clicked = 0
</script>

<FormInput label="Input" on:click={() => (clicked += 1)} placeholder="Click Me!" />
clicked: {clicked}
