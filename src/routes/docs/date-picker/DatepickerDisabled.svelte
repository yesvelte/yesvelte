<script lang="ts">
	import { DatePicker } from 'yesvelte'

	let value: Date = new Date()
</script>

<DatePicker disabled bind:value />
