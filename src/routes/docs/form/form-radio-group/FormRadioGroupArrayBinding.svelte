<script lang="ts">
	import { FormRadioGroup } from 'yesvelte'

	let items = [
		{ text: 'HTML', code: 'html' },
		{ text: 'CSS', code: 'css' },
		{ text: 'JavaScript', code: 'js' },
		{ text: 'Svelte', code: 'svelte' },
	]

	let value: string | undefined = $state(undefined)
</script>

<FormRadioGroup label="Select Language" key="code" bind:value {items}>
	{#snippet children({ item, index })}
		{(index || 0) + 1}- {item.text} ({item.code})
	{/snippet}
</FormRadioGroup>

<i>value: {JSON.stringify(value)}</i>
