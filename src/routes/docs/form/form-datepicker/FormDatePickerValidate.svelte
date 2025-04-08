<script lang="ts">
	import { FormDatePicker, El } from 'yesvelte'

	let validationState: 'invalid' | undefined = $state(undefined)
	let hint: string = $state('')

	function onChange() {
		if (new Date(value) < new Date()) {
			hint = 'Day is not in the future'
			validationState = 'invalid'
		} else {
			hint = ''
			validationState = undefined
		}
	}

	let value: any = $state()
</script>

<FormDatePicker
	label="choose a day in the future:"
	{hint}
	state={validationState}
	bind:value
	onchanged={onChange} />
<El>value: {value}</El>
