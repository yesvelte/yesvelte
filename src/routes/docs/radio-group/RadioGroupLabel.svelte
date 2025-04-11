<script lang="ts">
	import { RadioGroup } from 'yesvelte'

	let items = [
		{ text: 'HTML', code: 'html' },
		{ text: 'CSS', code: 'css' },
		{ text: 'JavaScript', code: 'js' },
		{ text: 'Svelte', code: 'svelte' },
	]

	let value = $state(items[1].code)
</script>

<RadioGroup bind:value {items} key="code">
	{#snippet children({ item, index })}
		{(index || 0) + 1}- {item.text}
	{/snippet}
</RadioGroup>

<i>value: {JSON.stringify(value)}</i>
