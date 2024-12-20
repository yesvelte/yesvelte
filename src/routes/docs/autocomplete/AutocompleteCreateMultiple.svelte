<script lang="ts">
	import { Autocomplete } from 'yesvelte'

	let items = ['Apple', 'Orange', 'Peach', 'Banana', 'Apricot']
	let value = ['Apple']

	function onCreated(event: string) {
		value = [...value, event]
		items = [...items, event]
	}
</script>

<Autocomplete oncreated={onCreated} multiple create {items} bind:value />
<i>value: {value}</i>
