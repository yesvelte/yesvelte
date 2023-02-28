<script>
	import { FormAutocomplete } from 'yesvelte'

	let items = ['Red', 'Green', 'Blue', 'GHI', 'Cyan', 'DEF', 'Black', 'ABC']
</script>

<FormAutocomplete {items} hint="choose your favorite color" label="First Color:" />
<FormAutocomplete
	{items}
	label="invalid:"
	hint="GHI is not a valid color name."
	state="invalid"
	value="GHI" />
<FormAutocomplete
	{items}
	label="valid:"
	hint="This color name is valid."
	state="valid"
	value="black" />
