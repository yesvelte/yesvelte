<script lang="ts">
	import { FormSelect } from 'yesvelte'

	let items = ['Red', 'Green', 'Blue', 'GHI', 'Cyan', 'DEF', 'Black', 'ABC']
	let value: any = undefined
</script>

<FormSelect
	bind:value
	{items}
	label="Favorite Color:"
	hint="We will never share your selected item with anyone else." />
<FormSelect
	bind:value
	{items}
	label="Favorite Color:"
	hint="Selected item is validated!"
	state="valid" />
<FormSelect
	bind:value
	{items}
	label="Favorite Color:"
	hint="Selected item is invalid!"
	state="invalid" />
