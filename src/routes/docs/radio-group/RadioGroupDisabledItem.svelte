<script lang="ts">
	import { RadioGroup } from 'yesvelte'

	let items = [
		{ text: 'HTML', code: 'html', disabled: true },
		{ text: 'CSS', code: 'css', disabled: true },
		{ text: 'JavaScript', code: 'js' },
		{ text: 'Svelte', code: 'svelte' },
	]

	let value: any = undefined
</script>

<RadioGroup bind:value {items} let:item let:index>
	{(index || 0) + 1}- {item.text} ({item.code})
</RadioGroup>

<i>value: {JSON.stringify(value)}</i>
