<script>
	import { Avatar, Button, Dropdown, DropdownItem, DropdownMenu } from 'yesvelte'
</script>

<Dropdown placement="bottom-start" arrow={false}>
	<Avatar slot="target" color="primary">
		<img src="/images/avatar.png" />
	</Avatar>

	<DropdownMenu>
		<DropdownItem href="#profile">Profile</DropdownItem>
		<DropdownItem href="#settings">Settings</DropdownItem>
		<DropdownItem href="#logout">Logout</DropdownItem>
	</DropdownMenu>
</Dropdown>
