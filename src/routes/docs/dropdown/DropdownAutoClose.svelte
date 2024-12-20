<script>
	import { Button, Dropdown, DropdownItem, DropdownMenu } from 'yesvelte'
</script>

<Dropdown autoClose={false}>
	{#snippet targetSnippet()}
		<Button color="primary">Close Manually</Button>
	{/snippet}

	<DropdownMenu>
		<DropdownItem>Item 1</DropdownItem>
		<DropdownItem>Item 2</DropdownItem>
		<DropdownItem>Item 3</DropdownItem>
	</DropdownMenu>
</Dropdown>

<Dropdown autoClose>
	{#snippet targetSnippet()}
		<Button color="success">Auto close</Button>
	{/snippet}

	<DropdownMenu>
		<DropdownItem>Item 1</DropdownItem>
		<DropdownItem>Item 2</DropdownItem>
		<DropdownItem>Item 3</DropdownItem>
	</DropdownMenu>
</Dropdown>

<Dropdown autoClose="inside">
	{#snippet targetSnippet()}
		<Button color="warning">Close if clicked inside of Menu</Button>
	{/snippet}

	<DropdownMenu>
		<DropdownItem>Item 1</DropdownItem>
		<DropdownItem>Item 2</DropdownItem>
		<DropdownItem>Item 3</DropdownItem>
	</DropdownMenu>
</Dropdown>

<Dropdown autoClose="outside">
	{#snippet targetSnippet()}
		<Button color="info">Close if clicked outside of Menu</Button>
	{/snippet}

	<DropdownMenu>
		<DropdownItem>Item 1</DropdownItem>
		<DropdownItem>Item 2</DropdownItem>
		<DropdownItem>Item 3</DropdownItem>
	</DropdownMenu>
</Dropdown>
