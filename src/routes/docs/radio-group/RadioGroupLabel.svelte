<script lang="ts">
	import { RadioGroup } from 'yesvelte'

	let items = [
		{ text: 'HTML', code: 'html' },
		{ text: 'CSS', code: 'css' },
		{ text: 'JavaScript', code: 'js' },
		{ text: 'Svelte', code: 'svelte' },
	]

	let value = items[1]
</script>

<RadioGroup bind:value {items} let:item let:index>
	{(index || 0) + 1}- {item.text}
</RadioGroup>

<i>value: {JSON.stringify(value)}</i>
