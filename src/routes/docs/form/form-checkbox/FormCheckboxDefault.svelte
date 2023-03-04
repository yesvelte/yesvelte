<script lang="ts">
	import { FormCheckbox } from 'yesvelte'

	let value: string = 'agree'
	let checked: boolean = false
</script>

<FormCheckbox
	innerProps={{ description: 'This is description' }}
	bind:value
	bind:checked
	label="Form Checkbox">
	I agree
</FormCheckbox>

<i>value: {value}, checked={checked}</i>
