<script lang="ts">
	import { Checkbox, FormInput } from 'yesvelte'

	let min = $state(20)
	let max = $state(1000)

	let shouldValidate = $state(false)
	let value: number = $state()

	let errorMessage = $state('')
	let state: 'invalid' | undefined = $state(undefined)

	let minErrorMessage = $state('Amount should be greater than ' + min)
	let maxErrorMessage = $state('Amount should be less than ' + max)

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

	$effect(() => {
		if (shouldValidate) validate(+value)
	})
</script>

<Checkbox bind:checked={shouldValidate}>Should Validate</Checkbox>

<FormInput
	label="Amount:"
	type="number"
	bind:value
	hint={errorMessage}
	placeholder="Enter a value between {min} and {max}"
	{state} />
