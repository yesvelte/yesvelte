<script lang="ts">
	import { DatePicker } from 'yesvelte'

	let value: Date = $state(new Date())
</script>

<DatePicker disabled bind:value />
