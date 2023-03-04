<script lang="ts">
	import { El, FormTextarea } from 'yesvelte'

	let value: string
</script>

<FormTextarea label="Name" innerProps={{placeholder:"Enter your name..."} bind:value />
<FormTextarea label="Name" required innerProps={{placeholder:"Enter your name..."} bind:value />
<El tag="i">You typed: {value ?? ''}</El>
