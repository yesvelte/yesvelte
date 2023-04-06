<script>
	import { Button, Dropdown, DropdownItem, DropdownMenu } from 'yesvelte'
</script>

<Dropdown>
	<Button slot="target" color="primary">Toggle Dropdown</Button>

	<DropdownMenu>
		<DropdownItem>Item 1</DropdownItem>
		<DropdownItem>Item 2</DropdownItem>
		<DropdownItem divider />
		<DropdownItem>another Item 1</DropdownItem>
		<DropdownItem>another Item 2</DropdownItem>
		<DropdownItem>another Item 3</DropdownItem>
		<DropdownItem divider />
		<DropdownItem>Last Item</DropdownItem>
	</DropdownMenu>
</Dropdown>
