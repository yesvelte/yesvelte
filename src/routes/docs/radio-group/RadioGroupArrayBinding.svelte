<script lang="ts">
	import { RadioGroup } from 'yesvelte'

	let items = [
		{ text: 'HTML', code: 'html' },
		{ text: 'CSS', code: 'css' },
		{ text: 'JavaScript', code: 'js' },
		{ text: 'Svelte', code: 'svelte' },
	]

	let value: string | undefined = $state(undefined)
</script>

<RadioGroup bind:value {items} key="code">
	{#snippet children({ item, index })}
		{(index || 0) + 1}- {item.text} ({item.code})
	{/snippet}
</RadioGroup>

<i>value: {JSON.stringify(value)}</i>
