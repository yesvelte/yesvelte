<script>
	import { Button, El, Icon, Input } from 'yesvelte'
</script>

<Input placeholder="Enter your Email address...">
	<span slot="start">
		<Icon size="sm" name="mail" />
	</span>
	<Button slot="end" color="primary">Save</Button>
</Input>
