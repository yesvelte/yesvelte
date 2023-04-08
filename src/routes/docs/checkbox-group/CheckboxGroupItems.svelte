<script lang="ts">
	import { CheckboxGroup } from 'yesvelte'

	let items = [
		{
			name: 'Apple',
			value: 'a',
		},
		{
			name: 'Orange',
			value: 'o',
		},
		{
			name: 'Peach',
			value: 'p',
		},
		{
			name: 'Banana',
			value: 'b',
		},
		{
			name: 'Apricot',
			value: 'ap',
		},
	]
	let value: string[] = ['p', 'a']
</script>

<CheckboxGroup {items} key={(item) => item.value} bind:value let:item let:index>
	{index}- <b>{item.name}</b> ({item.value})
</CheckboxGroup>

<i>{JSON.stringify(value)}</i>
