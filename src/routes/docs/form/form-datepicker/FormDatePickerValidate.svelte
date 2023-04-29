<script lang="ts">
	import { FormDatePicker, El } from 'yesvelte'

	let state: 'invalid' | undefined = undefined
	let hint: string = ''

	function onChange() {
		if (new Date(value) < new Date()) {
			hint = 'Day is not in the future'
			state = 'invalid'
		} else {
			hint = ''
			state = undefined
		}
	}

	let value: any
</script>

<FormDatePicker
	label="choose a day in the future:"
	{hint}
	{state}
	bind:value
	on:changed={onChange} />
<El>value: {value}</El>
