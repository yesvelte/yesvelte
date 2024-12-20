<script lang="ts">
	import { Select } from 'yesvelte'

	let items = [
		{
			name: 'Apple',
			value: '1',
		},
		{
			name: 'Orange',
			value: '2',
		},
		{
			name: 'Peach',
			value: '3',
		},
		{
			name: 'Banana',
			value: '4',
		},
		{
			name: 'Apricot',
			value: '5',
		},
	]
	let value: any = undefined
</script>

<!-- key is string -->
<Select bind:value key="value" {items} let:item>
	{#snippet children({ item })}
		{item.value} - {item.name}
	{/snippet}
</Select>

<!-- key is a function -->
<Select bind:value key={(item) => item.value} {items} let:item>
	{#snippet children({ item })}
		{item.value} - {item.name}
	{/snippet}
</Select>

<i>value: {JSON.stringify(value)}</i>
