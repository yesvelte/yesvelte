<script lang="ts">
	import { Autocomplete } from 'yesvelte'

	let items = ['Apple', 'Orange', 'Peach', 'Banana', 'Apricot']
	let value = ''

	function onCreated({ detail }: CustomEvent<string>) {
		value = detail
		items = [...items, detail]
	}
</script>

<Autocomplete on:created={onCreated} create {items} bind:value />
<i>value: {value}</i>
