<script>
	import { FormAutocomplete, Button, El } from 'yesvelte'

	let items = ['Red', 'Green', 'Blue', 'Yellow', 'Cyan', 'Magenta', 'Black', 'White']
</script>

<El container>
	<El row>
		<FormAutocomplete {items} label="First" />
		<FormAutocomplete {items} label="Second" />

		<FormAutocomplete {items} col="6" label="Third" />
		<FormAutocomplete {items} col="6" label="Fourth" />
		<El mt="3" offset="9" col="3">
			<Button w="100" color="primary">Submit</Button>
		</El>
	</El>
</El>
