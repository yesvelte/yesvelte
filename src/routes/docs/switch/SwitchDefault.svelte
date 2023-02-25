<script>
	import { Switch } from 'yesvelte'

	let checked = false
</script>

<Switch bind:checked text="Switch: {checked}" />
