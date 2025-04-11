<script>
	import { Button, Dropdown, DropdownItem, DropdownMenu } from 'yesvelte'
</script>

<Dropdown>
	{#snippet targetSnippet()}
		<Button color="primary">With Arrow</Button>
	{/snippet}

	<DropdownMenu>
		<DropdownItem>Item 1</DropdownItem>
		<DropdownItem>Item 2</DropdownItem>
		<DropdownItem>Item 3</DropdownItem>
	</DropdownMenu>
</Dropdown>

<Dropdown arrow={false}>
	{#snippet targetSnippet()}
		<Button ms="2" color="primary">Without Arrow</Button>
	{/snippet}

	<DropdownMenu>
		<DropdownItem>Item 1</DropdownItem>
		<DropdownItem>Item 2</DropdownItem>
		<DropdownItem>Item 3</DropdownItem>
	</DropdownMenu>
</Dropdown>
