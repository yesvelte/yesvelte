<script lang="ts">
	import { Select } from 'yesvelte'

	let items = ['Apple', 'Orange', 'Peach', 'Banana', 'Apricot']
	let value: any = items[2]
</script>

<Select bind:value {items} />

<i>value: {value}</i>
