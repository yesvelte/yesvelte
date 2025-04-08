<script>
	import { El, Textarea } from 'yesvelte'

	let clicked = $state(0)
	let value = $state('Lorem Ipsum is simply dummy text of the printing and typesetting industry.')
</script>

<Textarea bind:value onclick={() => (clicked += 1)} />
<El>clicked: {clicked}</El>
