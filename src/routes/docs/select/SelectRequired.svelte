<script lang="ts">
	import { tick } from 'svelte'
	import { Button, El, Select } from 'yesvelte'

	let hint = $state('')
	let state: 'invalid' | undefined = $state(undefined)
	let value: string | undefined = $state(undefined)

	async function validate() {
		await tick()
		if (!value) {
			hint = 'This is required'
			state = 'invalid'
		} else {
			hint = ''
			state = undefined
		}
	}

	let items = $state(['HTML', 'CSS', 'JS', 'Svelte'])
</script>

<El tag="strong">Choose a Language: (required)</El>
<Select {items} {state} bind:value onblur={validate} onchange={validate} />
<El tag="small">{hint}</El><br />
<Button disabled={state === 'invalid'} color="primary">Submit</Button>
