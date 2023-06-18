<script>
	import { Autocomplete, El } from 'yesvelte'

	let items = [
		{ id: 'first', value: 'First Item' },
		{ id: 'second', value: 'Second Item' },
		{ id: 'third', value: 'Third Item' },
		{ id: 'fourth', value: 'Fourth Item' },
		{ id: 'fifth', value: 'Fifth Item' },
	]

	function onCreated(event) {
		items = [...items, { id: event.detail, value: event.detail + ' Item' }]
	}

	let value = ''
</script>

<El textColor="red" tag="small">Create new items is not supported if type of item is Object</El>
<Autocomplete create on:created={onCreated} key="id" {items} bind:value let:item>
	{item.value}
</Autocomplete>
<i>value: {value}</i>
