<script lang="ts">
	import { FormAutocomplete } from 'yesvelte'

	let items = ['Apple', 'Orange', 'Peach', 'Banana', 'Apricot']
	let value: any = undefined
</script>

<FormAutocomplete label="Label" bind:value {items} placeholder="Please select an item" />
<i>Selected value: {value}</i>
