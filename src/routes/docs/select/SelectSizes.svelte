<script lang="ts">
	import { Select } from 'yesvelte'

	let items = $state(['Apple', 'Orange', 'Peach', 'Banana', 'Apricot'])
	let value: any = $state(undefined)
</script>

<Select size="lg" bind:value {items} />
<Select bind:value {items} />
<Select size="sm" bind:value {items} />

<i>Selected value: {value}</i>
