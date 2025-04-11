<script lang="ts">
	import { DatePicker } from 'yesvelte'

	let value: Date | undefined = $state(undefined)
</script>

<DatePicker bind:value />
<i>value: {value}</i>
