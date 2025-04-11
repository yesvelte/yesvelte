<script lang="ts">
	import { FormDatePicker } from 'yesvelte'

	let value: string | undefined = $state()
</script>

<FormDatePicker label="Hiring date" placeholder="Enter a date" bind:value />
<i>{value}</i>
