<script>
	import { Autocomplete } from 'yesvelte'

	let items = ['Apple', 'Orange', 'Peach', 'Banana', 'Apricot']
	let value = ''
</script>

<Autocomplete {items} bind:value />
<i>value: {value}</i>
