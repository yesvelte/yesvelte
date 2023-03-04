<script>
	import { FormSwitch } from 'yesvelte'
	let checked = false
</script>

<FormSwitch bind:checked label="Form Switch" innerProps={{description: "this is description"}}>
	Text
</FormSwitch>
<FormSwitch bind:checked label="Form Switch" innerProps={{description: "this is another description"}}	>
	Text
</FormSwitch>
