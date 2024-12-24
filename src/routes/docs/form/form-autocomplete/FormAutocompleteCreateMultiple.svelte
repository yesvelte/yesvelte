<script lang="ts">
	import { FormAutocomplete } from 'yesvelte'

	let items = ['Apple', 'Orange', 'Peach', 'Banana', 'Apricot']
	let value = $state(['Apple'])

	function oncreated(detail: string) {
		value = [...value, detail]
		items = [...items, detail]
	}
</script>

<FormAutocomplete {oncreated} multiple create {items} bind:value />
<i>value: {value}</i>
