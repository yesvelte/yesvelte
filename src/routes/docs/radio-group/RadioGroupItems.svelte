<script lang="ts">
	import { RadioGroup } from 'yesvelte'

	let items = [
		{ id: 1, text: 'HTML', code: 'html' },
		{ id: 2, text: 'CSS', code: 'css' },
		{ id: 3, text: 'JavaScript', code: 'js' },
		{ id: 4, text: 'Svelte', code: 'svelte' },
	]

	let value: any = undefined
</script>

<RadioGroup bind:value {items} let:item let:index key="id">
	{index + 1}- {item.text} ({item.code})
</RadioGroup>

<i>value: {JSON.stringify(value)}</i>
