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

<!-- key is a string -->
<CheckboxGroup inline bind:value {items} key="code" let:item let:index>
	{(index || 0) + 1}- {item.text}
</CheckboxGroup>

<!-- key is a function -->
<CheckboxGroup inline bind:value {items} key={(item) => item.code} let:item let:index>
	{(index || 0) + 1}- {item.text}
</CheckboxGroup>

<i>value: {JSON.stringify(value)}</i>
