<script lang="ts">
	import { DatePicker, El } from 'yesvelte'

	let value: Date[] = $state([])
</script>

<El>Enter Date range</El>
<DatePicker range bind:value />

<i>start: {value[0]}</i>
<br />
<i>finish: {value[1]}</i>
