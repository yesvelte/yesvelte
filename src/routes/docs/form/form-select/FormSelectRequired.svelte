<script lang="ts">
	import { Button, FormSelect } from 'yesvelte'

	let hint = $state('')
	let validationState: 'invalid' | undefined = $state(undefined)
	let value: string | undefined = $state(undefined)

	function validate() {
		if (!value) {
			hint = 'This is required'
			validationState = 'invalid'
		} else {
			hint = ''
			validationState = undefined
		}
	}

	let items = $state(['HTML', 'CSS', 'JS', 'Svelte'])
</script>

<FormSelect
	{items}
	label="Choose a Language:"
	state={validationState}
	{hint}
	required
	bind:value
	onblur={validate}
	onchange={validate} />
<br />
<Button disabled={validationState === 'invalid'} color="primary">Submit</Button>
