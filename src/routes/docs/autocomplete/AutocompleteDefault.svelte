<script>
	import { Autocomplete } from 'yesvelte'

	let items = $state(['Apple', 'Orange', 'Peach', 'Banana', 'Apricot'])
	let value = $state('')
</script>

<Autocomplete {items} bind:value />
<i>value: {value}</i>
