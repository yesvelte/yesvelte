<script lang="ts">
	import { FormAutocomplete } from 'yesvelte'

	let items = ['Apple', 'Orange', 'Peach', 'Banana', 'Apricot']
	let value = ''

	function onCreated({ detail }: CustomEvent<string>) {
		value = detail
		items = [...items, detail]
	}
</script>

<FormAutocomplete
	label="Choose item (or create new)"
	on:created={onCreated}
	create
	{items}
	bind:value />
<i>value: {value}</i>
