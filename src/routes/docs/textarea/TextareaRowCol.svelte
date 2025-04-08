<script>
	import { Textarea } from 'yesvelte'

	let value = $state('')
</script>

<Textarea rows="5" placeholder="5 rows" bind:value />
