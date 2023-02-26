<script>
	import { Button, FormSwitch, El } from 'yesvelte'
</script>

<El container>
	<El row>
		<FormSwitch col="8" label="2/3 width:">Check 1</FormSwitch>
		<FormSwitch col="4" checked label="1/3 width:">Check 2</FormSwitch>
		<FormSwitch col="4" checked label="1/3 width:">Check 3</FormSwitch>
		<FormSwitch col="4" label="1/3 width:" required>Check 4</FormSwitch>
		<FormSwitch col="4" label="1/3 width:" required>Check 5</FormSwitch>
		<El col textAlign="end">
			<Button color="primary">Submit</Button>
		</El>
	</El>
</El>
