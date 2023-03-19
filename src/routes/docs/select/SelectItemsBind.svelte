<script lang="ts">
	import { Select } from 'yesvelte'

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

	let value: string = '1'
</script>

<Select bind:value {items} key="id" let:item let:index>{item.id} - {item.name}</Select>

<i>Selected Id: {value} - value: {JSON.stringify(items.find((item) => item.id === value))}</i>
