<script lang="ts">
	import { CheckboxGroup } from 'yesvelte'

	let items = [
		{ text: 'HTML', code: 'html' },
		{ text: 'CSS', code: 'css' },
		{ text: 'JavaScript', code: 'js' },
		{ text: 'Svelte', code: 'svelte' },
	]

	let value = [items[1]]
</script>

<CheckboxGroup bind:value {items} let:item let:index>
	{index + 1}- {item.text}
</CheckboxGroup>

<i>value: {JSON.stringify(value)}</i>
