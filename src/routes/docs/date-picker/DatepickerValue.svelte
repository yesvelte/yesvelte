<script lang="ts">
	import { DatePicker, El } from 'yesvelte'

	let value1: string = '1900/04/24'
	let value2: Date = new Date(2000, 5, 3)
</script>

<DatePicker bind:value={value1} />
<El mb="3">value: {value1}</El>

<DatePicker bind:value={value2} />
<El mb="3">value: {value2}</El>
