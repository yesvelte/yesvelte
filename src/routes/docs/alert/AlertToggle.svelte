<script lang="ts">
	import { Alert, Button } from 'yesvelte'

	let open = $state(false)

	function toggle() {
		open = !open
	}
</script>

<Alert dismissible bind:open title="Wow! Everything worked!" color="success">
	Your account has been saved!
</Alert>
<Button onclick={toggle}>Toggle Alert</Button>
