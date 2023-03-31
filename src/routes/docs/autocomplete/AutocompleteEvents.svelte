<script>
	import { Autocomplete } from 'yesvelte'

	let changed = 0
</script>

<Autocomplete
	items={['a', 'b', 'c', 'd', 'e', 'f']}
	on:changed={() => (changed += 1)}
	placeholder="Change My Value!" />

changed: {changed}
