<script>
	import { Button, Dropdown, DropdownItem, DropdownMenu } from 'yesvelte'
</script>

<Dropdown autoClose={false}>
	<Button slot="target" color="primary">Close Manually</Button>

	<DropdownMenu>
		<DropdownItem>Item 1</DropdownItem>
		<DropdownItem>Item 2</DropdownItem>
		<DropdownItem>Item 3</DropdownItem>
	</DropdownMenu>
</Dropdown>

<Dropdown autoClose>
	<Button slot="target" color="success">Auto close</Button>

	<DropdownMenu>
		<DropdownItem>Item 1</DropdownItem>
		<DropdownItem>Item 2</DropdownItem>
		<DropdownItem>Item 3</DropdownItem>
	</DropdownMenu>
</Dropdown>

<Dropdown autoClose="inside">
	<Button slot="target" color="warning">Close if clicked inside of Menu</Button>

	<DropdownMenu>
		<DropdownItem>Item 1</DropdownItem>
		<DropdownItem>Item 2</DropdownItem>
		<DropdownItem>Item 3</DropdownItem>
	</DropdownMenu>
</Dropdown>

<Dropdown autoClose="outside">
	<Button slot="target" color="info">Close if clicked outside of Menu</Button>

	<DropdownMenu>
		<DropdownItem>Item 1</DropdownItem>
		<DropdownItem>Item 2</DropdownItem>
		<DropdownItem>Item 3</DropdownItem>
	</DropdownMenu>
</Dropdown>
