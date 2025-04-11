<script lang="ts">
	import { DatePicker } from 'yesvelte'

	let value: Date | undefined = $state(undefined)

	function formatText(event: string) {
		const date = new Date(event)
		return date.getFullYear() + ' - ' + date.getMonth() + ' - ' + date.getDate()
	}

	let text = $state('')
</script>

<DatePicker bind:value bind:text {formatText} />
<i>value: {value}</i>
<br />
<i>formatted value: {text}</i>
