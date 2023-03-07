<script>
	import { FormAutocomplete } from 'yesvelte'
	let items = ['Red', 'Green', 'Blue', 'Yellow', 'Cyan', 'Magenta', 'Black', 'White']
</script>

<FormAutocomplete disabled label="Label" {items} />
