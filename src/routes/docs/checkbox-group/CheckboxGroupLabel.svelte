<script lang="ts">
	import { CheckboxGroup } from 'yesvelte'

	let items = [
		{ text: 'HTML', code: 'html' },
		{ text: 'CSS', code: 'css' },
		{ text: 'JavaScript', code: 'js' },
		{ text: 'Svelte', code: 'svelte' },
	]

	let value = ['html']
</script>

<CheckboxGroup bind:value {items} key="code">
	{#snippet children({ item, index })}
		{(index || 0) + 1}- {item.text}
	{/snippet}
</CheckboxGroup>

<i>value: {JSON.stringify(value)}</i>
