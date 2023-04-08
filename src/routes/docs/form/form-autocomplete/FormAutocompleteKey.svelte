<script>
	import { FormAutocomplete } from 'yesvelte'

	let items = [
		{ id: 'first', value: 'First Item' },
		{ id: 'second', value: 'Second Item' },
		{ id: 'third', value: 'Third Item' },
		{ id: 'fourth', value: 'Fourth Item' },
		{ id: 'fifth', value: 'Fifth Item' },
	]

	let value = items[2]
</script>

<!-- key is string -->
<FormAutocomplete label="Label" key="id" bind:value {items} let:item let:index>
	{index} - {item.value}
</FormAutocomplete>

<!-- key is function -->
<FormAutocomplete label="Label" key={(item) => item.id} bind:value {items} let:item let:index>
	{index} - {item.value}
</FormAutocomplete>
<i>value: {JSON.stringify(value)}</i>
