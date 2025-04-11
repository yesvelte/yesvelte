<script lang="ts">
	import { FormRadioGroup } from 'yesvelte'

	let items = [
		{ text: 'HTML', code: 'html' },
		{ text: 'CSS', code: 'css' },
		{ text: 'JavaScript', code: 'js' },
		{ text: 'Svelte', code: 'svelte' },
	]

	let value = $state(items[1].code)
</script>

<FormRadioGroup label="Select Language" key={(item) => item.code} bind:value {items}>
	{#snippet children({ item, index })}
		{(index || 0) + 1}- {item.text}
	{/snippet}
</FormRadioGroup>

<i>value: {JSON.stringify(value)}</i>
