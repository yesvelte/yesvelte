<script lang="ts">
	import { El, FormInput } from 'yesvelte'

	let value: string
</script>

<FormInput label="Name" placeholder="Enter your name..." bind:value />
<FormInput label="Name" required placeholder="Enter your name..." bind:value />
<El tag="i">You typed: {value ?? ''}</El>
