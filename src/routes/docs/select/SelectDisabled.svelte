<script lang="ts">
	import { Select } from 'yesvelte'

	let items = ['Apple', 'Orange', 'Peach', 'Banana', 'Apricot']
	let value: any = undefined
</script>

<Select disabled bind:value {items} />
