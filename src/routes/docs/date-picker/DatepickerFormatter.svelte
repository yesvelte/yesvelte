<script lang="ts">
	import { DatePicker } from 'yesvelte'

	let value: Date

	function formatText(date: Date) {
		return date.getFullYear() + ' - ' + date.getMonth() + ' - ' + date.getDate()
	}

	let text = ''
</script>

<DatePicker bind:value bind:text {formatText} />
<i>value: {value}</i>
<br />
<i>formatted value: {text}</i>
