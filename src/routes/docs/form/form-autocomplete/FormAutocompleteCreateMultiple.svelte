<script lang="ts">
	import { FormAutocomplete } from 'yesvelte'

	let items = ['Apple', 'Orange', 'Peach', 'Banana', 'Apricot']
	let value = ['Apple']

	function onCreated({ detail }: CustomEvent<string>) {
		value = [...value, detail]
		items = [...items, detail]
	}
</script>

<FormAutocomplete on:created={onCreated} multiple create {items} bind:value />
<i>value: {value}</i>
