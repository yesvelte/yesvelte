<script>
	import { FormSelect } from 'yesvelte'

	let clicked = 0
</script>

<FormSelect
	label="Select"
	items={['a', 'b', 'c']}
	on:click={() => (clicked += 1)}
	placeholder="Click Me!" />

clicked: {clicked}
