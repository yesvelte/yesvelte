<script lang="ts">
	import { FormRadioGroup } from 'yesvelte'

	let items = [
		{ text: 'HTML', code: 'html' },
		{ text: 'CSS', code: 'css' },
		{ text: 'JavaScript', code: 'js' },
		{ text: 'Svelte', code: 'svelte' },
	]

	let value = items[1].code
</script>

<!-- key is string -->
<FormRadioGroup label="Select Language" key="code" bind:value {items} let:item let:index>
	{(index || 0) + 1}- {item.text}
</FormRadioGroup>

<!-- key is function -->
<FormRadioGroup
	label="Select Language"
	key={(item) => item.code}
	bind:value
	{items}
	let:item
	let:index>
	{(index || 0) + 1}- {item.text}
</FormRadioGroup>

<i>value: {JSON.stringify(value)}</i>
