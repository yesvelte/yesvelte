<script lang="ts">
	import { FormSelect } from 'yesvelte'

	let items = ['Apple', 'Orange', 'Peach', 'Banana', 'Apricot']
	let value: any = []
</script>

<FormSelect multiple bind:value {items} label="Label" />
<FormSelect multiple bind:value {items} required label="Label" />

<i>value: {value}</i>
