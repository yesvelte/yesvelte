<script>
	import { FormInput } from 'yesvelte'

	let clicked = $state(0)
</script>

<FormInput label="Input" onclick={() => (clicked += 1)} placeholder="Click Me!" />
clicked: {clicked}
