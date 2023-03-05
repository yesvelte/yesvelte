<script>
	import { FormCheckboxGroup } from 'yesvelte'

	// define array to be bound to the CheckboxGroup
	let items = ['HTML', 'CSS', 'JavaScript', 'Svelte']

	// setting the selected value
	let value = [items[1]]
</script>

<FormCheckboxGroup label="Select Language" reverse {items} bind:value />

<i>value: {value}</i>
