<script>
	import { Button, FormCheckbox, El } from 'yesvelte'
	let value = false
</script>

<El container>
	<El row>
		<FormCheckbox col="8" label="2/3 width:">Check 1</FormCheckbox>
		<FormCheckbox col="4" value label="1/3 width:">Check 2</FormCheckbox>
		<FormCheckbox col="4" value label="1/3 width:">Check 3</FormCheckbox>
		<FormCheckbox col="4" label="1/3 width:" required>Check 4</FormCheckbox>
		<FormCheckbox col="4" label="1/3 width:" required>Check 5</FormCheckbox>
		<El col textAlign="end">
			<Button color="primary">Submit</Button>
		</El>
	</El>
</El>

<i>{value}</i>
