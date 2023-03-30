<script lang="ts">
	import { FormSelect } from 'yesvelte'

	let items = [
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
	]

	let value: any = items[0]
</script>

<FormSelect label="Fruit" bind:value {items} let:item>{item.id} - {item.name}</FormSelect>

<i>value: {JSON.stringify(value)}</i>
