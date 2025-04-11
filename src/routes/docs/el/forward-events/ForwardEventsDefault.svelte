<script>
	import { Button } from 'yesvelte'

	let count = 0
</script>

<Button onclick={() => (count += 1)}>
	Count: {count}
</Button>
