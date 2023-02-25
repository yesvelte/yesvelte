<script lang="ts">
	import { RadioGroup } from 'yesvelte'

	// define array to be bound to the RadioGroup
	let items = ['HTML', 'CSS', 'JavaScript', 'Svelte']

	// setting the selected value
	let value = items[1]
</script>

<RadioGroup inline color="primary" {items} bind:value />
<RadioGroup inline color="secondary" {items} bind:value />
<RadioGroup inline color="success" {items} bind:value />
<RadioGroup inline color="danger" {items} bind:value />

<i>value: {value}</i>
