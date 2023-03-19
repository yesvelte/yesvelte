<script>
	import { El, Textarea } from 'yesvelte'

	let clicked = 0
	let value = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
</script>

<Textarea bind:value on:click={() => (clicked += 1)} />
<El>clicked: {clicked}</El>
