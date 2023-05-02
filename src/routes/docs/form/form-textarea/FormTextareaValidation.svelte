<script lang="ts">
	import { FormTextarea } from 'yesvelte'

	let value: string = ''

	let hint: string = ''
	let state: 'invalid' | undefined = undefined

	$: if (value && value.indexOf('bad') > -1) {
		hint = 'Text should not have "bad" word'
		state = 'invalid'
	} else {
		hint = ''
		state = undefined
	}
</script>

<FormTextarea label="Any text except 'bad' word." {state} {hint} bind:value />
