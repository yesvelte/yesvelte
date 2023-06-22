<script lang="ts">
	import { Autocomplete } from 'yesvelte'

	let items = [
		{ id: 1, value: 'First Item' },
		{ id: 2, value: 'Second Item' },
		{ id: 3, value: 'Third Item' },
		{ id: 4, value: 'Fourth Item' },
		{ id: 5, value: 'Fifth Item' },
	]

	function onCreated(event: any) {
		const id = items.length + 1

		items = [...items, { id, value: event.detail }]
		value = id
	}

	let value: number | undefined = undefined
</script>

<Autocomplete create on:created={onCreated} key="id" {items} bind:value let:item>
	{item.value}
</Autocomplete>
<i>value: {value}</i>
