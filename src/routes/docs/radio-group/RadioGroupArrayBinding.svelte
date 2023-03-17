<script lang="ts">
	import { RadioGroup } from 'yesvelte'

	let items = [
		{ text: 'HTML', code: 'html' },
		{ text: 'CSS', code: 'css' },
		{ text: 'JavaScript', code: 'js' },
		{ text: 'Svelte', code: 'svelte' },
	]

	let value: string | undefined = undefined
</script>

<RadioGroup bind:value {items} key="code" let:item let:index>
	{(index || 0) + 1}- {item.text} ({item.code})
</RadioGroup>

<i>value: {JSON.stringify(value)}</i>
