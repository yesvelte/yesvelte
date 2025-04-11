<script>
	import { FormSelect } from 'yesvelte'

	let clicked = $state(0)
</script>

<FormSelect
	label="Select"
	items={['a', 'b', 'c']}
	onclick={() => (clicked += 1)}
	placeholder="Click Me!" />

clicked: {clicked}
