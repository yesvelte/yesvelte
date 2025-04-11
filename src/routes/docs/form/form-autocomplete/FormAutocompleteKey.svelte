<script>
	import { FormAutocomplete } from 'yesvelte'

	let items = [
		{ id: 'first', value: 'First Item' },
		{ id: 'second', value: 'Second Item' },
		{ id: 'third', value: 'Third Item' },
		{ id: 'fourth', value: 'Fourth Item' },
		{ id: 'fifth', value: 'Fifth Item' },
	]

	let value = $state(items[2])
</script>

<!-- key is string -->
<FormAutocomplete label="Label" key="id" bind:value {items}>
	{#snippet children({ item, index })}
		{index} - {item.value}
	{/snippet}
</FormAutocomplete>

<!-- key is function -->
<FormAutocomplete label="Label" key={(item) => item.id} bind:value {items}>
	{#snippet children({ item, index })}
		{index} - {item.value}
	{/snippet}
</FormAutocomplete>
<i>value: {JSON.stringify(value)}</i>
