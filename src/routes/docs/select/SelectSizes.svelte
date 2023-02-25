<script lang="ts">
	import { Select } from 'yesvelte'

	let items = ['Apple', 'Orange', 'Peach', 'Banana', 'Apricot']
	let value: any = undefined
</script>

<Select size="lg" bind:value {items} />
<Select bind:value {items} />
<Select size="sm" bind:value {items} />

<i>Selected value: {value}</i>
