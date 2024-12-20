<script lang="ts">
	import { Select } from 'yesvelte'

	let items = $state(['Apple', 'Orange', 'Peach', 'Banana', 'Apricot'])
	let value: any = $state(items[2])
</script>

<Select bind:value {items} />

<i>value: {value}</i>
