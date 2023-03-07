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

	let defaultId = '1'
	let value: any = items.find((x) => x.id === defaultId)

	$: selectedId = value?.id
</script>

<FormSelect label="Fruit" bind:value {items} let:item let:index>{item.id} - {item.name}</FormSelect>

<i>Selected Id: {selectedId} - value: {JSON.stringify(value)}</i>
