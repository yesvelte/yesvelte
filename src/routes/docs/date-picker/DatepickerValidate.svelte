<script lang="ts">
	import { DatePicker, El } from 'yesvelte'

	let validationState: 'invalid' | undefined = $state(undefined)
	let hint: string = $state('')

	function onchanged() {
		if (new Date(value) > new Date()) {
			hint = 'Day is not in the past'
			validationState = 'invalid'
		} else {
			hint = ''
			validationState = undefined
		}
	}

	let value: any = $state(undefined)
</script>

<El tag="strong">choose a day in the past:</El>
<DatePicker state={validationState} bind:value {onchanged} />
<El mb="3" tag="small">{hint}</El>
<El>value: {value}</El>
