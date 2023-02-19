<script lang="ts">
	import { Alert, Button, El } from 'yesvelte'

	let open = false

	function toggle() {
		open = !open
	}
</script>

<Alert dismissible bind:open title="Wow! Everything worked!" color="success">
	Your account has been saved!
</Alert>
<Button on:click={toggle}>Toggle Alert</Button>
