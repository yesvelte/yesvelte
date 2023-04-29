<script lang="ts">
	import { DatePicker, El } from 'yesvelte'

	let state: 'invalid' | undefined = undefined
	let hint: string = ''

	function onChange() {
		console.log(new Date(value), new Date(), new Date(value) > new Date())
		if (new Date(value) > new Date()) {
			hint = 'Day is not in the past'
			state = 'invalid'
		} else {
			hint = ''
			state = undefined
		}
	}

	let value: any
</script>

<El tag="strong">choose a day in the past:</El>
<DatePicker {state} bind:value on:changed={onChange} />
<El mb="3" tag="small">{hint}</El>
<El>value: {value}</El>
