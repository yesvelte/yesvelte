<script lang="ts">
	import { Select } from 'yesvelte'

	let items = $state(['Apple', 'Orange', 'Peach', 'Banana', 'Apricot'])
	let value: any = $state(undefined)
</script>

<Select bind:value {items} placeholder="Please select an item" />
<i>Selected value: {value}</i>
