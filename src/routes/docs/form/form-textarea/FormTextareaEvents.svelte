<script>
	import { El, FormTextarea } from 'yesvelte'

	let clicked = $state(0)
	let value = $state('Lorem Ipsum is simply dummy text of the printing and typesetting industry.')
</script>

<FormTextarea label="Textarea" bind:value onclick={() => (clicked += 1)} />
<El>clicked: {clicked}</El>
