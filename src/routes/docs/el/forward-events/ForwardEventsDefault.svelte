<script>
	import { Button } from 'yesvelte'

	let count = 0
</script>

<Button on:click={() => (count += 1)}>
	Count: {count}
</Button>
