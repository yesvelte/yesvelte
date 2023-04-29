<script lang="ts">
	import { Checkbox, FormInput } from 'yesvelte'

	let min = 20
	let max = 1000

	let shouldValidate = false
	let value: number

	let errorMessage = ''
	let state: 'invalid' | undefined = undefined

	let minErrorMessage = 'Amount should be greater than ' + min
	let maxErrorMessage = 'Amount should be less than ' + max

	function validate(value: number) {
		if (!isNaN(value)) {
			if (value < min) {
				errorMessage = minErrorMessage
				state = 'invalid'
			} else if (value > max) {
				errorMessage = maxErrorMessage
				state = 'invalid'
			} else {
				errorMessage = ''
				state = undefined
			}
		}
	}

	$: if (shouldValidate) validate(+value)
</script>

<Checkbox bind:checked={shouldValidate}>Should Validate</Checkbox>

<FormInput
	label="Amount:"
	type="number"
	bind:value
	hint={errorMessage}
	placeholder="Enter a value between {min} and {max}"
	{state} />
