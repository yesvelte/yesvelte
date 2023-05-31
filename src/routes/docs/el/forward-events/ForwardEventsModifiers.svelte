<script>
	import { Button, El, FormInput } from 'yesvelte'

	let message = ''
	function onSubmit() {
		message = 'Prevented default behavior of Forms'
	}
</script>

<El tag="form" action="/api/test" on:submit!preventDefault={onSubmit}>
	<FormInput label="Name" name="name" />
	<FormInput label="Email" name="email" />

	<El textAlign="end">
		<Button type="submit" color="primary">Submit</Button>
	</El>
</El>

<El>{message}</El>
