<script>
	import { Button, Dropdown, DropdownItem, DropdownMenu } from 'yesvelte'
</script>

<Dropdown placement="top">
	{#snippet targetSnippet()}
		<Button>Top</Button>
	{/snippet}

	<DropdownMenu>
		<DropdownItem href="#profile">Profile</DropdownItem>
		<DropdownItem href="#settings">Settings</DropdownItem>
		<DropdownItem href="#logout">Logout</DropdownItem>
	</DropdownMenu>
</Dropdown>

<Dropdown placement="top-start">
	{#snippet targetSnippet()}
		<Button>Top Start</Button>
	{/snippet}

	<DropdownMenu>
		<DropdownItem href="#profile">Profile</DropdownItem>
		<DropdownItem href="#settings">Settings</DropdownItem>
		<DropdownItem href="#logout">Logout</DropdownItem>
	</DropdownMenu>
</Dropdown>

<Dropdown placement="top-end">
	{#snippet targetSnippet()}
		<Button>Top end</Button>
	{/snippet}

	<DropdownMenu>
		<DropdownItem href="#profile">Profile</DropdownItem>
		<DropdownItem href="#settings">Settings</DropdownItem>
		<DropdownItem href="#logout">Logout</DropdownItem>
	</DropdownMenu>
</Dropdown>

<br />
<Dropdown placement="bottom">
	{#snippet targetSnippet()}
		<Button>bottom</Button>
	{/snippet}

	<DropdownMenu>
		<DropdownItem href="#profile">Profile</DropdownItem>
		<DropdownItem href="#settings">Settings</DropdownItem>
		<DropdownItem href="#logout">Logout</DropdownItem>
	</DropdownMenu>
</Dropdown>

<Dropdown placement="bottom-start">
	{#snippet targetSnippet()}
		<Button>bottom Start</Button>
	{/snippet}

	<DropdownMenu>
		<DropdownItem href="#profile">Profile</DropdownItem>
		<DropdownItem href="#settings">Settings</DropdownItem>
		<DropdownItem href="#logout">Logout</DropdownItem>
	</DropdownMenu>
</Dropdown>

<Dropdown placement="bottom-end">
	{#snippet targetSnippet()}
		<Button>bottom end</Button>
	{/snippet}

	<DropdownMenu>
		<DropdownItem href="#profile">Profile</DropdownItem>
		<DropdownItem href="#settings">Settings</DropdownItem>
		<DropdownItem href="#logout">Logout</DropdownItem>
	</DropdownMenu>
</Dropdown>

<br />
<Dropdown placement="left">
	{#snippet targetSnippet()}
		<Button>left</Button>
	{/snippet}

	<DropdownMenu>
		<DropdownItem href="#profile">Profile</DropdownItem>
		<DropdownItem href="#settings">Settings</DropdownItem>
		<DropdownItem href="#logout">Logout</DropdownItem>
	</DropdownMenu>
</Dropdown>

<Dropdown placement="left-start">
	{#snippet targetSnippet()}
		<Button>left Start</Button>
	{/snippet}

	<DropdownMenu>
		<DropdownItem href="#profile">Profile</DropdownItem>
		<DropdownItem href="#settings">Settings</DropdownItem>
		<DropdownItem href="#logout">Logout</DropdownItem>
	</DropdownMenu>
</Dropdown>

<Dropdown placement="left-end">
	{#snippet targetSnippet()}
		<Button>left end</Button>
	{/snippet}

	<DropdownMenu>
		<DropdownItem href="#profile">Profile</DropdownItem>
		<DropdownItem href="#settings">Settings</DropdownItem>
		<DropdownItem href="#logout">Logout</DropdownItem>
	</DropdownMenu>
</Dropdown>

<br />
<Dropdown placement="right">
	{#snippet targetSnippet()}
		<Button>right</Button>
	{/snippet}

	<DropdownMenu>
		<DropdownItem href="#profile">Profile</DropdownItem>
		<DropdownItem href="#settings">Settings</DropdownItem>
		<DropdownItem href="#logout">Logout</DropdownItem>
	</DropdownMenu>
</Dropdown>

<Dropdown placement="right-start">
	{#snippet targetSnippet()}
		<Button>right Start</Button>
	{/snippet}

	<DropdownMenu>
		<DropdownItem href="#profile">Profile</DropdownItem>
		<DropdownItem href="#settings">Settings</DropdownItem>
		<DropdownItem href="#logout">Logout</DropdownItem>
	</DropdownMenu>
</Dropdown>

<Dropdown placement="right-end">
	{#snippet targetSnippet()}
		<Button>right end</Button>
	{/snippet}

	<DropdownMenu>
		<DropdownItem href="#profile">Profile</DropdownItem>
		<DropdownItem href="#settings">Settings</DropdownItem>
		<DropdownItem href="#logout">Logout</DropdownItem>
	</DropdownMenu>
</Dropdown>
