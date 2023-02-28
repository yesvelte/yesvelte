<script lang="ts">
	import { FormAutocomplete } from 'yesvelte'

	let items = ['Apple', 'Orange', 'Peach', 'Banana', 'Apricot']
	let value: any = undefined
</script>

<FormAutocomplete bind:value {items} label="Label" />
<FormAutocomplete bind:value {items} required label="Label" />
<i>value: {value}</i>
