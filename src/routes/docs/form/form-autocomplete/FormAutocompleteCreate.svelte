<script lang="ts">
	import { FormAutocomplete } from 'yesvelte'

	let items = ['Apple', 'Orange', 'Peach', 'Banana', 'Apricot']
	let value = $state('')

	function oncreated(detail: string) {
		value = detail
		items = [...items, detail]
	}
</script>

<FormAutocomplete label="Choose item (or create new)" {oncreated} create {items} bind:value />
<i>value: {value}</i>
