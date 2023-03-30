<script>
	import { Button, Dropdown, DropdownItem, DropdownMenu, Icon } from 'yesvelte'
</script>

<Dropdown>
	<Button slot="target" color="primary">Toggle Dropdown</Button>

	<DropdownMenu>
		<DropdownItem>
			<Icon name="home" />
			Home
		</DropdownItem>
		<DropdownItem>
			<Icon name="box" />
			Item 2
		</DropdownItem>
		<DropdownItem>
			<Icon name="user" />
			Item 3
		</DropdownItem>
	</DropdownMenu>
</Dropdown>
