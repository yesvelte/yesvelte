<script lang="ts">
	import { Autocomplete } from 'yesvelte'

	let items = ['Apple', 'Orange', 'Peach', 'Banana', 'Apricot']
	let value = ''

	function onCreated(item: string) {
		value = item
		items = [...items, item]
	}
</script>

<Autocomplete oncreated={onCreated} create {items} bind:value />
<i>value: {value}</i>
