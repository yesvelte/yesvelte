<script>
	import { FormCheckbox } from 'yesvelte'
	let value = false
</script>

<FormCheckbox bind:value label="Form Checkbox" innerProps={{ description: 'this is description' }}>
	Text
</FormCheckbox>

<FormCheckbox
	bind:value
	label="Form Checkbox"
	innerProps={{ color: 'danger', description: 'this is description by danger color' }}>
	Text
</FormCheckbox>
