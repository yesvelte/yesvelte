<script lang="ts">
	import { FormSelect } from 'yesvelte'

	let items = $state(['Apple', 'Orange', 'Peach', 'Banana', 'Apricot'])
	let value: any = $state(undefined)
</script>

<FormSelect bind:value {items} label="Label" />
<FormSelect bind:value {items} required label="Label" />
<i>value: {value}</i>
