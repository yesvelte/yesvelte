<script>
	import { Switch } from 'yesvelte'

	let value1 = false
	let value2 = false
</script>

<Switch bind:value={value1} label="Switch 1: {value1}">
	<div slot="description">this is description slot</div>
</Switch>

<Switch bind:value={value2} label="Switch 2: {value2}" description="this is description prop" />
