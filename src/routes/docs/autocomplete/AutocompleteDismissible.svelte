<script>
	import { Autocomplete } from 'yesvelte'

	let items = ['Apple', 'Orange', 'Peach', 'Banana', 'Apricot']
	let value = ''
</script>

<Autocomplete multiple dismissible {items} bind:value />
<i>value: {value}</i>
