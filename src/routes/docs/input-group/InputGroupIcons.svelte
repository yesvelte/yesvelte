<script>
	import { Button, FormInput, Icon, Input } from 'yesvelte'
</script>

<Input placeholder="your domain name">
	<Icon slot="end" name="search" />
</Input>

<FormInput placeholder="your domain name">
	<Button tag="a" slot="end">
		<Icon name="search" />
	</Button>
</FormInput>
