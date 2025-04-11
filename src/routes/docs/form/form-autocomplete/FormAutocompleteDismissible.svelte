<script>
	import { FormAutocomplete } from 'yesvelte'

	let items = $state(['Apple', 'Orange', 'Peach', 'Banana', 'Apricot'])
	let value = $state('')
</script>

<FormAutocomplete label="Choose fruits" multiple dismissible {items} bind:value />
<i>value: {value}</i>
