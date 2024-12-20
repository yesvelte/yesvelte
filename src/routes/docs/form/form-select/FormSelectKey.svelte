<script lang="ts">
	import { FormSelect } from 'yesvelte'

	let items = $state([
		{
			name: 'Apple',
			id: '1',
			type: 'Fruit',
		},
		{
			name: 'Orange',
			id: '2',
			type: 'Fruit',
		},
		{
			name: 'Peach',
			id: '3',
			type: 'Fruit',
		},
		{
			name: 'Banana',
			id: '4',
			type: 'Fruit',
		},
		{
			name: 'Apricot',
			id: '5',
			type: 'Fruit',
		},
	])

	let value: any = $state('1')
</script>

<!-- key is string -->
<FormSelect label="Fruit" key="id" bind:value {items}>
	{#snippet children({ item })}
		{item.id} - {item.name}
	{/snippet}
</FormSelect>

<!-- key is function -->
<FormSelect label="Fruit" key={(item) => item.id} bind:value {items}>
	{#snippet children({ item })}
		{item.id} - {item.name}
	{/snippet}
</FormSelect>

<i>Selected Id: {value} - value: {JSON.stringify(items.find((item) => item.id === value))}</i>
