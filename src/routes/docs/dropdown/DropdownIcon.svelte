<script>
	import { Button, Dropdown, DropdownItem, DropdownMenu, Icon } from 'yesvelte'
</script>

<Dropdown>
	{#snippet targetSnippet()}
		<Button color="primary">Toggle Dropdown</Button>
	{/snippet}

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
