<script>
	import { FormCheckbox } from 'yesvelte'
	let value = false
</script>

<FormCheckbox
	innerProps={{
		description:
			'Pushes will be rejected if they attempt to update more than this. Learn more about this setting, and send us your feedback.',
	}}
	required
	bind:value
	label="Pushes">
	Limit how many branches and tags can be updated in a single push
</FormCheckbox>

<FormCheckbox hint="This field is required" state="invalid" required bind:value label="Terms">
	I accept Terms of service and Privacy policy.
</FormCheckbox>

<i>{value}</i>
