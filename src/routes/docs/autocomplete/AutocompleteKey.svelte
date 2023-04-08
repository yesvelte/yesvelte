<script>
	import { Autocomplete } from 'yesvelte'

	let items = [
		{ id: 'first', value: 'First Item' },
		{ id: 'second', value: 'Second Item' },
		{ id: 'third', value: 'Third Item' },
		{ id: 'fourth', value: 'Fourth Item' },
		{ id: 'fifth', value: 'Fifth Item' },
	]

	let value = 'third'
</script>

<!-- key is string -->
<Autocomplete key="id" {items} bind:value let:item let:index>
	{index} - {item.value}
</Autocomplete>

<!-- key is function -->
<Autocomplete key={(item) => item.id} {items} bind:value let:item let:index>
	{index} - {item.value}
</Autocomplete>

<i>value: {JSON.stringify(value)}</i>
