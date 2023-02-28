<script>
	import { El, Textarea } from 'yesvelte'

	let value = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
</script>

<Textarea bind:value />
<El>value: {value ?? ''}</El>
