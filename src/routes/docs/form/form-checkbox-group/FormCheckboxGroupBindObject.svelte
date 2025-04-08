<script lang="ts">
	import { FormCheckboxGroup } from 'yesvelte'

	let items = [
		{ text: 'HTML', code: 'html' },
		{ text: 'CSS', code: 'css' },
		{ text: 'JavaScript', code: 'js' },
		{ text: 'Svelte', code: 'svelte' },
	]

	let value: any[] = [items[1]]
</script>

<FormCheckboxGroup label="Select Language" bind:value {items}>
	{#snippet children({ item, index })}
		{(index || 0) + 1}- {item.text} ({item.code})
	{/snippet}
</FormCheckboxGroup>

<i>value: {JSON.stringify(value)}</i>
