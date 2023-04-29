<script lang="ts">
	import { El, Select } from 'yesvelte'

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

<El tag="strong">Choose a Language: (required)</El>
<Select {items} {state} bind:value on:blur={validate} on:change={validate} />
<El tag="small">{hint}</El>
