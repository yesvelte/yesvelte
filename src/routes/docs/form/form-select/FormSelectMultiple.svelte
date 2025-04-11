<script lang="ts">
	import { FormSelect } from 'yesvelte'

	let items = $state(['Apple', 'Orange', 'Peach', 'Banana', 'Apricot'])
	let value: any = $state([])
</script>

<FormSelect multiple bind:value {items} label="Label" />
<FormSelect multiple bind:value {items} required label="Label" />

<i>value: {value}</i>
