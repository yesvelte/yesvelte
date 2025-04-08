<script>
	import { Autocomplete } from 'yesvelte'

	let items = $state(['Apple', 'Orange', 'Peach', 'Banana', 'Apricot'])
	let value = $state('')
</script>

<Autocomplete multiple dismissible {items} bind:value />
<i>value: {value}</i>
