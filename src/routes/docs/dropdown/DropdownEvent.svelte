<script>
	import { Button, Dropdown, DropdownItem, DropdownMenu } from 'yesvelte'

	let last = ''
</script>

<Dropdown>
	<Button slot="target" color="primary">Toggle Dropdown (last clicked item: {last})</Button>

	<DropdownMenu>
		<DropdownItem on:click={() => (last = 'Item 1')}>Item 1</DropdownItem>
		<DropdownItem on:click={() => (last = 'Item 2')}>Item 2</DropdownItem>
		<DropdownItem on:click={() => (last = 'Item 3')}>Item 3</DropdownItem>
	</DropdownMenu>
</Dropdown>
