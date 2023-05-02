<script lang="ts">
	import { Button, FormSelect } from 'yesvelte'

	let hint = ''
	let state: 'invalid' | undefined = undefined
	let value: string | undefined = undefined

	function validate() {
		if (!value) {
			hint = 'This is required'
			state = 'invalid'
		} else {
			hint = ''
			state = undefined
		}
	}

	let items = ['HTML', 'CSS', 'JS', 'Svelte']
</script>

<FormSelect
	{items}
	label="Choose a Language:"
	{state}
	{hint}
	required
	bind:value
	on:blur={validate}
	on:change={validate} />
<br />
<Button disabled={state === 'invalid'} color="primary">Submit</Button>
