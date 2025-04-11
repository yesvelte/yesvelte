<script>
	import { Avatar, Dropdown, DropdownItem, DropdownMenu } from 'yesvelte'
</script>

<Dropdown placement="bottom-start" arrow={false}>
	{#snippet targetSnippet()}
		<Avatar color="primary">
			<img src="/images/avatar.png" />
		</Avatar>
	{/snippet}

	<DropdownMenu>
		<DropdownItem href="#profile">Profile</DropdownItem>
		<DropdownItem href="#settings">Settings</DropdownItem>
		<DropdownItem href="#logout">Logout</DropdownItem>
	</DropdownMenu>
</Dropdown>
