<script>
	import { Autocomplete } from 'yesvelte'

	let items = ['Apple', 'Orange', 'Peach', 'Banana', 'Apricot']
	let value = ['Apple']
</script>

<Autocomplete multiple {items} bind:value />
<i>value: {value}</i>
