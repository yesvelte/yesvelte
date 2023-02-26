<script>
	import { FormDatePicker, Button, El } from 'yesvelte'
</script>

<El container>
	<El row>
		<FormDatePicker label="Date of birth" required />
		<FormDatePicker label="Graduation date" />
		<FormDatePicker col="6" label="Start date" />
		<FormDatePicker col="6" label="End Date" />
		<El offset="10" col="2">
			<Button w="100" color="primary">Submit</Button>
		</El>
	</El>
</El>
