<script>
	import { El, FormDatePicker, Icon } from 'yesvelte'
</script>

<El row>
	<FormDatePicker col="6" label="Start Icon" value="2022/04/02">
		<span slot="start">
			<Icon name="calendar" />
		</span>
	</FormDatePicker>

	<FormDatePicker col="6" label="End Icon" value="2022/04/02">
		<span slot="end">
			<Icon name="calendar" />
		</span>
	</FormDatePicker>
</El>
