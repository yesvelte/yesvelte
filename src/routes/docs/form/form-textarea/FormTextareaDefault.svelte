<script lang="ts">
	import { El, FormTextarea } from 'yesvelte'

	let value: string = $state()
</script>

<FormTextarea label="Name" placeholder="Enter your name..." bind:value />
<FormTextarea label="Name" required placeholder="Enter your name..." bind:value />
<El tag="i">You typed: {value ?? ''}</El>
