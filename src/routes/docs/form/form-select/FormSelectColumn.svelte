<script>
	import { FormSelect, El, Button } from 'yesvelte'

	let items = ['Red', 'Green', 'Blue', 'Yellow', 'Cyan', 'Magenta', 'Black', 'White']
</script>

<El row>
	<FormSelect {items} col="6" label="First" />
	<FormSelect {items} col="6" label="Second" />

	<FormSelect {items} label="Third" />
	<FormSelect {items} col="6" label="Fourth" />
	<El col="12" textAlign="end">
		<Button color="primary">Submit</Button>
	</El>
</El>
