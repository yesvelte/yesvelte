<script lang="ts">
	import { El, Textarea } from 'yesvelte'

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

<El tag="strong">In this box, you should not use "bad" word.</El>
<Textarea state={validationState} bind:value />
{#if hint}
	<El textColor="danger">{hint}</El>
{/if}
