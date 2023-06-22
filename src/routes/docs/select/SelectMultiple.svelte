<script lang="ts">
	import { Select } from 'yesvelte'

	let items = ['Apple', 'Orange', 'Peach', 'Banana', 'Apricot']
	let value: any = [items[2], items[1]]
</script>

<Select bind:value multiple {items} />

<i>values: {value.join(', ')}</i>
