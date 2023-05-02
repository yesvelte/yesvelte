<script lang="ts">
	import { El, Textarea } from 'yesvelte'

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

<El tag="strong">In this box, you should not use "bad" word.</El>
<Textarea {state} bind:value />
{#if hint}
	<El textColor="danger">{hint}</El>
{/if}
