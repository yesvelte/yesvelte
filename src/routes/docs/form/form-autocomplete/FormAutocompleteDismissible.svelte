<script>
	import { FormAutocomplete } from 'yesvelte'

	let items = ['Apple', 'Orange', 'Peach', 'Banana', 'Apricot']
	let value = ''
</script>

<FormAutocomplete label="Choose fruits" multiple dismissible {items} bind:value />
<i>value: {value}</i>
