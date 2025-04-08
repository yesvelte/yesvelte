<script lang="ts">
	import { El, Input } from 'yesvelte'

	let value: any = $state()
</script>

<Input bind:value placeholder="Try to type something..." />

<Input w="50" bind:value placeholder="Try to type something..." />
<El>You typed: {value ?? ''}</El>
