<script lang="ts">
	import { FormSelect } from 'yesvelte'

	let items = ['Apple', 'Orange', 'Peach', 'Banana', 'Apricot']
	let value: any = undefined
</script>

<FormSelect bind:value {items} label="Label" />
<FormSelect bind:value {items} required label="Label" />
<i>value: {value}</i>
