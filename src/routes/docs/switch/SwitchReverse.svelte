<script>
	import { Switch } from 'yesvelte'

	let checked = false
</script>

<Switch reverse bind:checked text="Switch: {checked}" />
