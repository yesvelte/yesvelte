<script>
	import { Autocomplete } from 'yesvelte'

	let items = ['Apple', 'Orange', 'Peach', 'Banana', 'Apricot']
	let value = ''
</script>

<Autocomplete {items} bind:value placeholder="Please select an item" />
<i>value: {value}</i>
