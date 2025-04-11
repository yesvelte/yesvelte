<script>
	import { Button, Dropdown, DropdownItem, DropdownMenu } from 'yesvelte'

	let last = $state('')
</script>

<Dropdown>
	{#snippet targetSnippet()}
		<Button color="primary">Toggle Dropdown (last clicked item: {last})</Button>
	{/snippet}

	<DropdownMenu>
		<DropdownItem onclick={() => (last = 'Item 1')}>Item 1</DropdownItem>
		<DropdownItem onclick={() => (last = 'Item 2')}>Item 2</DropdownItem>
		<DropdownItem onclick={() => (last = 'Item 3')}>Item 3</DropdownItem>
	</DropdownMenu>
</Dropdown>
