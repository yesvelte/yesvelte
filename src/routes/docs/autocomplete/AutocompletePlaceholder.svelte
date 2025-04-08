<script>
	import { Autocomplete } from 'yesvelte'

	let items = $state(['Apple', 'Orange', 'Peach', 'Banana', 'Apricot'])
	let value = $state('')
</script>

<Autocomplete {items} bind:value placeholder="Please select an item" />
<i>value: {value}</i>
