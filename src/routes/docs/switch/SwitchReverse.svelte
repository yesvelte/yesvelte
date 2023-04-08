<script>
	import { Switch } from 'yesvelte'

	let checked = false
</script>

<Switch reverse bind:checked label="Switch: {checked}" />
