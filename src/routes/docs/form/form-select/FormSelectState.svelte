<script lang="ts">
	import { FormSelect } from 'yesvelte'

	let items = $state(['Red', 'Green', 'Blue', 'GHI', 'Cyan', 'DEF', 'Black'])
	let value: any = $state(undefined)
</script>

<FormSelect bind:value {items} label="Favorite Color:" state="valid" />
<FormSelect bind:value {items} label="Favorite Color:" state="invalid" />
