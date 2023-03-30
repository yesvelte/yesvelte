<script>
	import { Autocomplete, Avatar, Badge, Checkbox, El } from 'yesvelte'

	let items = [
		{ id: '1', name: 'User 1' },
		{ id: '2', name: 'User 2' },
		{ id: '3', name: 'User 3' },
	]

	let value = '2'
</script>

<Autocomplete {items} key={(item) => item.id} bind:value let:item>
	<El d="flex" alignItems="center">
		<Avatar me="2">
			<img src="/images/avatar.png" />
		</Avatar>
		{item.name}
	</El>
	<El
		d="flex"
		alignItems="center"
		p="1"
		pe="3"
		border
		borderRadius="pill"
		bgColor="light"
		slot="selected">
		<Avatar shape="circle" size="xs" me="2">
			<img src="/images/avatar.png" />
		</Avatar>
		{item.name}
	</El>
</Autocomplete>

<i>user id: {value}</i>
