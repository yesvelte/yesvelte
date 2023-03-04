<script lang="ts">
	import { FormRadioGroup } from 'yesvelte'

	// define array to be bound to the RadioGroup
	let items = ['HTML', 'CSS', 'JavaScript', 'Svelte']

	// setting the selected value
	let value = items[1]
</script>

<FormRadioGroup
	label="Select Language"
	innerProps={{ inline: true, items }}
	color="primary"
	bind:value />
<FormRadioGroup
	label="Select Language"
	innerProps={{ inline: true, items }}
	color="secondary"
	bind:value />
<FormRadioGroup
	label="Select Language"
	innerProps={{ inline: true, items }}
	color="success"
	bind:value />
<FormRadioGroup
	label="Select Language"
	innerProps={{ inline: true, items }}
	color="danger"
	bind:value />

<i>value: {value}</i>
