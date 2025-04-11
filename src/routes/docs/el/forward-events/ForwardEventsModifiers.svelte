<script>
	import { Button, El, FormInput } from 'yesvelte'

	let message = $state('')
	function onSubmit(e) {
		e.preventDefault()
		message = 'Prevented default behavior of Forms'
	}
</script>

<El tag="form" action="/api/test" onsubmit={onSubmit}>
	<FormInput label="Name" name="name" />
	<FormInput label="Email" name="email" />

	<El textAlign="end">
		<Button type="submit" color="primary">Submit</Button>
	</El>
</El>

<El>{message}</El>
