<script lang="ts">
	import { FormRadioGroup } from 'yesvelte'

	// define array to be bound to the RadioGroup
	let items = ['HTML', 'CSS', 'JavaScript', 'Svelte']

	// setting the selected value
	let value = items[1]
</script>

<FormRadioGroup label="Select Language" inline color="primary" {items} bind:value />
<FormRadioGroup label="Select Language" inline color="secondary" {items} bind:value />
<FormRadioGroup label="Select Language" inline color="success" {items} bind:value />
<FormRadioGroup label="Select Language" inline color="danger" {items} bind:value />

<i>value: {value}</i>
