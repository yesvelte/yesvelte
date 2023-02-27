<script>
	import { Table, TableBody, TableCell, TableHead, TableRow } from '@ubeac/svelte'
</script>

<Table color="primary">
	<TableHead>
		<TableRow>
			<TableCell>Name</TableCell>
			<TableCell>Title</TableCell>
			<TableCell>Email</TableCell>
			<TableCell>Role</TableCell>
		</TableRow>
	</TableHead>
	<TableBody>
		<TableRow>
			<TableCell>Paweł Kuna</TableCell>
			<TableCell>UI Designer, Training</TableCell>
			<TableCell>paweluna@howstuffworks.com</TableCell>
			<TableCell>User</TableCell>
		</TableRow>

		{#each ['primary', 'secondary', 'success', 'warning', 'danger', 'info'] as color}
			<TableRow {color}>
				<TableCell>Jeffie Lewzey</TableCell>
				<TableCell>Chemical Engineer, Support</TableCell>
				<TableCell>jlewzey1@seesaa.net</TableCell>
				<TableCell>Admin</TableCell>
			</TableRow>
		{/each}

		<TableRow>
			<TableCell color="succes">Mallory Hulme</TableCell>
			<TableCell color="info">Geologist IV, Support</TableCell>
			<TableCell color="danger">mhulme2@domainmarket.com</TableCell>
			<TableCell color="warning">User</TableCell>
		</TableRow>
	</TableBody>
</Table>
