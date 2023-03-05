<script>
	import { CheckboxGroup } from 'yesvelte'

	// define array to be bound to the CheckboxGroup
	let items = ['HTML', 'CSS', 'JavaScript', 'Svelte']

	// setting the selected value
	let value = [items[1], items[2]]
</script>

<CheckboxGroup reverse {items} bind:value />

<i>value: {value}</i>
