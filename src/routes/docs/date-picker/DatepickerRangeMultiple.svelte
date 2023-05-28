<script lang="ts">
	import { DatePicker, El } from 'yesvelte'

	let value: Date[] = []
</script>

<El>Enter Date range</El>
<DatePicker options={{ numberOfMonths: 2 }} range bind:value />

<i>start: {value[0]}</i>
<br />
<i>finish: {value[1]}</i>
