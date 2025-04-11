<script>
	import { Button, Dropdown, DropdownItem, DropdownMenu } from 'yesvelte'
</script>

<Dropdown>
	{#snippet targetSnippet()}
		<Button color="primary">Primary Dropdown</Button>
	{/snippet}

	<DropdownMenu>
		<DropdownItem>Item 1</DropdownItem>
		<DropdownItem>Item 2</DropdownItem>
		<DropdownItem>Item 3</DropdownItem>
	</DropdownMenu>
</Dropdown>

<Dropdown>
	{#snippet targetSnippet()}
		<Button color="secondary">Secondary Dropdown</Button>
	{/snippet}

	<DropdownMenu>
		<DropdownItem>Item 1</DropdownItem>
		<DropdownItem>Item 2</DropdownItem>
		<DropdownItem>Item 3</DropdownItem>
	</DropdownMenu>
</Dropdown>

<Dropdown>
	{#snippet targetSnippet()}
		<Button color="success">Success Dropdown</Button>
	{/snippet}

	<DropdownMenu>
		<DropdownItem>Item 1</DropdownItem>
		<DropdownItem>Item 2</DropdownItem>
		<DropdownItem>Item 3</DropdownItem>
	</DropdownMenu>
</Dropdown>

<Dropdown>
	{#snippet targetSnippet()}
		<Button color="danger">Danger Dropdown</Button>
	{/snippet}

	<DropdownMenu>
		<DropdownItem>Item 1</DropdownItem>
		<DropdownItem>Item 2</DropdownItem>
		<DropdownItem>Item 3</DropdownItem>
	</DropdownMenu>
</Dropdown>
