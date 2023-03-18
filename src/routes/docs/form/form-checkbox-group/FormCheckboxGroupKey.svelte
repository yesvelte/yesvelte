<script lang="ts">
	import { FormCheckboxGroup } from 'yesvelte'

	let items = [
		{ text: 'HTML', code: 'html' },
		{ text: 'CSS', code: 'css' },
		{ text: 'JavaScript', code: 'js' },
		{ text: 'Svelte', code: 'svelte' },
	]

	let value = [items[1].code, items[3].code]
</script>

<!-- key is string -->
<FormCheckboxGroup label="Select Language" key="code" bind:value {items} let:item let:index>
	{(index || 0) + 1}- {item.text}
</FormCheckboxGroup>

<!-- key is function -->
<FormCheckboxGroup
	label="Select Language"
	key={(item) => item.code}
	bind:value
	{items}
	let:item
	let:index>
	{(index || 0) + 1}- {item.text}
</FormCheckboxGroup>

<i>value: {JSON.stringify(value)}</i>
