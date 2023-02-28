<script lang="ts">
	import { Autocomplete } from 'yesvelte'

	let items = ['Apple', 'Orange', 'Peach', 'Banana', 'Apricot']
	let value: any = undefined
</script>

<Autocomplete size="lg" bind:value {items} />
<Autocomplete bind:value {items} />
<Autocomplete size="sm" bind:value {items} />

<i>Selected value: {value}</i>
