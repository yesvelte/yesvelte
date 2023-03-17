<script lang="ts">
	import { FormCheckboxGroup } from 'yesvelte'

	let items = [
		{ text: 'HTML', code: 'html' },
		{ text: 'CSS', code: 'css' },
		{ text: 'JavaScript', code: 'js' },
		{ text: 'Svelte', code: 'svelte' },
	]

	let value: string[] = ['css']
</script>

<FormCheckboxGroup
	label="Select Language"
	key={(item) => item.code}
	bind:value
	{items}
	let:item
	let:index>
	{(index || 0) + 1}- {item.text} ({item.code})
</FormCheckboxGroup>

<i>value: {JSON.stringify(value)}</i>
