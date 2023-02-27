<script>
	import { Table, TableBody, TableCell, TableHead, TableRow } from '@ubeac/svelte'
</script>

<Table sort>
	<TableHead>
		<TableRow>
			<TableCell>Name</TableCell>
			<TableCell>Title</TableCell>
			<TableCell truncate>Email</TableCell>
			<TableCell>Role</TableCell>
		</TableRow>
	</TableHead>
	<TableBody>
		<TableRow>
			<TableCell>Paweł Kuna</TableCell>
			<TableCell>UI Designer, Training</TableCell>
			<TableCell truncate>paweluna@howstuffworks.com</TableCell>
			<TableCell>User</TableCell>
		</TableRow>

		<TableRow>
			<TableCell>Jeffie Lewzey</TableCell>
			<TableCell>Chemical Engineer, Support</TableCell>
			<TableCell truncate>jlewzey1@seesaa.net</TableCell>
			<TableCell>Admin</TableCell>
		</TableRow>

		<TableRow>
			<TableCell>Mallory Hulme</TableCell>
			<TableCell>Geologist IV, Support</TableCell>
			<TableCell truncate>mhulme2@domainmarket.com</TableCell>
			<TableCell>User</TableCell>
		</TableRow>

		<TableRow>
			<TableCell>Dunn Slane</TableCell>
			<TableCell>Research Nurse, Sales</TableCell>
			<TableCell truncate>dslane3@epa.gov</TableCell>
			<TableCell>Owner</TableCell>
		</TableRow>

		<TableRow>
			<TableCell>Emmy Levet</TableCell>
			<TableCell>VP Product Management, Accounting</TableCell>
			<TableCell truncate>elevet4@senate.gov</TableCell>
			<TableCell>Admin</TableCell>
		</TableRow>
	</TableBody>
</Table>
