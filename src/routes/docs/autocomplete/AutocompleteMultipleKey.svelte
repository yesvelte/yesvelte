<script>
	import { Autocomplete } from 'yesvelte'

	let items = [
		{ id: 'first', value: 'First Item' },
		{ id: 'second', value: 'Second Item' },
		{ id: 'third', value: 'Third Item' },
		{ id: 'fourth', value: 'Fourth Item' },
		{ id: 'fifth', value: 'Fifth Item' },
	]

	let value = ['second', 'fourth']
</script>

<Autocomplete {items} bind:value key="id" multiple let:item let:index
	>{index} - {item.value}</Autocomplete>
<i>value: {JSON.stringify(value)}</i>
