<script lang="ts">
	import { Checkbox, El, Input } from 'yesvelte'

	let min = $state(20)
	let max = $state(1000)

	let shouldValidate = $state(false)
	let value: number | undefined = $state()

	let errorMessage = $state('')
	let validationState: 'invalid' | undefined = $state(undefined)

	let minErrorMessage = $state('Amount should be greater than ' + min)
	let maxErrorMessage = $state('Amount should be less than ' + max)

	function validate(value: number | undefined) {
		if (!value) return
		if (!isNaN(value)) {
			if (value < min) {
				errorMessage = minErrorMessage
				validationState = 'invalid'
			} else if (value > max) {
				errorMessage = maxErrorMessage
				validationState = 'invalid'
			} else {
				errorMessage = ''
				validationState = undefined
			}
		}
	}

	$effect(() => {
		if (shouldValidate) validate(value)
	})
</script>

<Checkbox bind:checked={shouldValidate}>Should Validate</Checkbox>

<El tag="strong">Amount:</El>
<Input
	type="number"
	bind:value
	placeholder="Enter a value between {min} and {max}"
	state={validationState} />
<El textColor="danger" tag="small">{errorMessage}</El>
