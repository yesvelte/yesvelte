<script>
	import { FormAutocomplete } from 'yesvelte'

	let items = ['Apple', 'Orange', 'Peach', 'Banana', 'Apricot']
	let value = ['Apple']
</script>

<FormAutocomplete label="Choose multiple fruits" multiple {items} bind:value />
<i>value: {value}</i>
