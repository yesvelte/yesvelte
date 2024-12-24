<script>
	import { DatePicker } from 'yesvelte'

	let rangeValue = $state('')
</script>

<small>Highlight days</small>
<DatePicker options={{ highlightedDays: [['2022/12/01', '2022/12/08']] }} />

<small>Number of months</small>
<DatePicker options={{ numberOfMonths: 2 }} />
