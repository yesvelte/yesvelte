<script lang="ts">
	import { Autocomplete } from 'yesvelte'

	let items = ['Apple', 'Orange', 'Peach', 'Banana', 'Apricot']
	let value = ['Apple']

	function onCreated({ detail }: CustomEvent<string>) {
		console.log('onCreated')
		value = [...value, detail]
		items = [...items, detail]
	}
</script>

<Autocomplete on:created={onCreated} multiple create {items} bind:value />
<i>value: {value}</i>
