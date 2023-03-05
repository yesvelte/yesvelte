<script lang="ts">
	import { FormRadioGroup } from 'yesvelte'

	// define array to be bound to the RadioGroup
	let items = ['HTML', 'CSS', 'JavaScript', 'Svelte']

	// setting the selected value
	let value = items[1]
</script>

<FormRadioGroup label="Select Language" bind:value {items} />
<i>value: {value}</i>
