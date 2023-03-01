<script lang="ts">
	import { FormAutocomplete } from 'yesvelte'

	let items = ['Apple', 'Orange', 'Peach', 'Banana', 'Apricot']
	let value: any = undefined
</script>

<FormAutocomplete label="Label" size="lg" bind:value {items} />
<FormAutocomplete label="Label" bind:value {items} />
<FormAutocomplete label="Label" size="sm" bind:value {items} />

<i>Selected value: {value}</i>
