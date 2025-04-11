<script lang="ts">
	import { Select } from 'yesvelte'

	let items = $state(['Apple', 'Orange', 'Peach', 'Banana', 'Apricot'])
	let value: any = $state(undefined)
</script>

<Select disabled bind:value {items} />
