<script lang="ts">
	import { DatePicker } from 'yesvelte'

	let value: Date
</script>

<DatePicker bind:value />
<i>value: {value}</i>
