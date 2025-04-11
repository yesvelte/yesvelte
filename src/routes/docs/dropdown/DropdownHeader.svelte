<script>
	import { Button, Dropdown, DropdownItem, DropdownMenu } from 'yesvelte'
</script>

<Dropdown>
	{#snippet targetSnippet()}
		<Button color="primary">Toggle Dropdown</Button>
	{/snippet}

	<DropdownMenu>
		<DropdownItem header>Header</DropdownItem>
		<DropdownItem>Item 1</DropdownItem>
		<DropdownItem>Item 2</DropdownItem>
		<DropdownItem>Item 3</DropdownItem>
		<DropdownItem divider />
		<DropdownItem header>Second Header</DropdownItem>
		<DropdownItem>Item 3</DropdownItem>
		<DropdownItem>Item 3</DropdownItem>
	</DropdownMenu>
</Dropdown>
