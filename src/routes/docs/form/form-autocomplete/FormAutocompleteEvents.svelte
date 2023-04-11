<script>
	import { FormAutocomplete } from 'yesvelte'

	let changed = 0
</script>

<FormAutocomplete
	items={['a', 'b', 'c', 'd', 'e', 'f']}
	label="Autocomplete"
	on:changed={() => (changed += 1)}
	placeholder="Change My Value!" />

changed: {changed}
