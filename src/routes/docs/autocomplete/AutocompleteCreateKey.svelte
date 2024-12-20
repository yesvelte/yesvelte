<script lang="ts">
	import { Autocomplete } from 'yesvelte'

	let items = [
		{ id: 1, value: 'First Item' },
		{ id: 2, value: 'Second Item' },
		{ id: 3, value: 'Third Item' },
		{ id: 4, value: 'Fourth Item' },
		{ id: 5, value: 'Fifth Item' },
	]

	function onCreated(event: string) {
		const id = items.length + 1

		items = [...items, { id, value: event }]
		value = id
	}

	let value: number | undefined = undefined
</script>

<Autocomplete create oncreated={onCreated} key="id" {items} bind:value let:item>
	{#snippet children({ item, index })}
		{item.value}
	{/snippet}
</Autocomplete>
<i>value: {value}</i>
