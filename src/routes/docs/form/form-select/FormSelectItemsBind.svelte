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

	let value: any = '1'
</script>

<FormSelect label="Fruit" key="id" bind:value {items} let:item let:index
	>{item.id} - {item.name}</FormSelect>

<i>Selected Id: {value} - value: {JSON.stringify(items.find((item) => item.id === value))}</i>
