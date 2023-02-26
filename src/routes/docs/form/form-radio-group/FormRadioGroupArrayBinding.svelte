<script lang="ts">
	import { FormRadioGroup } from 'yesvelte'

	let items = [
		{ text: 'HTML', code: 'html' },
		{ text: 'CSS', code: 'css' },
		{ text: 'JavaScript', code: 'js' },
		{ text: 'Svelte', code: 'svelte' },
	]

	let value: any = undefined
</script>

<FormRadioGroup label="Select Language" bind:value {items} let:item let:index>
	{index + 1}- {item.text} ({item.code})
</FormRadioGroup>

<i>value: {JSON.stringify(value)}</i>
