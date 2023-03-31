<script>
	import { El, Button, Dropdown, DropdownItem, DropdownMenu } from 'yesvelte'
</script>

<El d="flex" class="flex-wrap" gap="2">
	<Dropdown>
		<Button slot="target" color="primary">Primary Dropdown</Button>

		<DropdownMenu>
			<DropdownItem>Item 1</DropdownItem>
			<DropdownItem>Item 2</DropdownItem>
			<DropdownItem>Item 3</DropdownItem>
		</DropdownMenu>
	</Dropdown>

	<Dropdown>
		<Button slot="target" color="secondary">Secondary Dropdown</Button>

		<DropdownMenu>
			<DropdownItem>Item 1</DropdownItem>
			<DropdownItem>Item 2</DropdownItem>
			<DropdownItem>Item 3</DropdownItem>
		</DropdownMenu>
	</Dropdown>

	<Dropdown>
		<Button slot="target" color="success">Success Dropdown</Button>

		<DropdownMenu>
			<DropdownItem>Item 1</DropdownItem>
			<DropdownItem>Item 2</DropdownItem>
			<DropdownItem>Item 3</DropdownItem>
		</DropdownMenu>
	</Dropdown>

	<Dropdown>
		<Button slot="target" color="danger">Danger Dropdown</Button>

		<DropdownMenu>
			<DropdownItem>Item 1</DropdownItem>
			<DropdownItem>Item 2</DropdownItem>
			<DropdownItem>Item 3</DropdownItem>
		</DropdownMenu>
	</Dropdown>
</El>
