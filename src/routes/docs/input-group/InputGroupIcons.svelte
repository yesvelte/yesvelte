<script>
	import { Button, Icon, Input } from 'yesvelte'
</script>

<Input placeholder="your domain name">
	<span slot="end">
		<Icon name="search" />
	</span>
</Input>

<Input placeholder="your domain name">
	<Button tag="a" slot="end">
		<Icon name="search" />
	</Button>
</Input>
