<script lang="ts">
	import { FormTextarea } from 'yesvelte'

	let value: string = $state('')

	let hint: string = $state('')
	let validationState: 'invalid' | undefined = $state(undefined)

	$effect(() => {
		if (value && value.indexOf('bad') > -1) {
			hint = 'Text should not have "bad" word'
			validationState = 'invalid'
		} else {
			hint = ''
			validationState = undefined
		}
	}) 
</script>

<FormTextarea label="Any text except 'bad' word." state={validationState} {hint} bind:value />
