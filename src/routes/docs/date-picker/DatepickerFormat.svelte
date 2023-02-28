<script lang="ts">
	import { DatePicker, El } from 'yesvelte'

	let value: Date
</script>

<DatePicker bind:value format="yyyy/MM/DD" />
<El mb="3">format: yyyy/MM/DD, value: {value}</El>

<DatePicker bind:value format="Do [of] MMMM" />
<El mb="3">format: Do [of] MMMM, value: {value}</El>

<DatePicker bind:value format="D MMM YYYY" />
<El mb="3">format: D MMM YYYY, value: {value}</El>
