<script>
	import { Table, TableBody, TableCell, TableHead, TableRow } from 'yesvelte'
</script>

<Table striped>
	<TableHead>
		<TableRow>
			<TableCell>Name</TableCell>
			<TableCell>Title</TableCell>
			<TableCell>Email</TableCell>
			<TableCell>Role</TableCell>
			<TableCell>Description</TableCell>
		</TableRow>
	</TableHead>
	<TableBody>
		<TableRow>
			<TableCell>Paweł Kuna</TableCell>
			<TableCell>UI Designer, Training</TableCell>
			<TableCell>paweluna@howstuffworks.com</TableCell>
			<TableCell>User</TableCell>
			<TableCell truncate>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, nisl vitae ultricies
				lacinia, nisl nisl aliquet nisl, vitae aliquet nisl nisl sit amet nisl.
			</TableCell>
		</TableRow>

		<TableRow>
			<TableCell>Jeffie Lewzey</TableCell>
			<TableCell>Chemical Engineer, Support</TableCell>
			<TableCell>jlewzey1@seesaa.net</TableCell>
			<TableCell>Admin</TableCell>
			<TableCell truncate>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, nisl vitae ultricies
				lacinia, nisl nisl aliquet nisl, vitae aliquet nisl nisl sit amet nisl.
			</TableCell>
		</TableRow>

		<TableRow>
			<TableCell>Mallory Hulme</TableCell>
			<TableCell>Geologist IV, Support</TableCell>
			<TableCell truncate>mhulme2@domainmarket.com</TableCell>
			<TableCell>User</TableCell>
			<TableCell truncate>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, nisl vitae ultricies
				lacinia, nisl nisl aliquet nisl, vitae aliquet nisl nisl sit amet nisl.
			</TableCell>
		</TableRow>

		<TableRow>
			<TableCell>Dunn Slane</TableCell>
			<TableCell>Research Nurse, Sales</TableCell>
			<TableCell truncate>dslane3@epa.gov</TableCell>
			<TableCell>Owner</TableCell>
			<TableCell truncate>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, nisl vitae ultricies
				lacinia, nisl nisl aliquet nisl, vitae aliquet nisl nisl sit amet nisl.
			</TableCell>
		</TableRow>

		<TableRow>
			<TableCell>Emmy Levet</TableCell>
			<TableCell>VP Product Management, Accounting</TableCell>
			<TableCell truncate>elevet4@senate.gov</TableCell>
			<TableCell>Admin</TableCell>
			<TableCell truncate>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, nisl vitae ultricies
				lacinia, nisl nisl aliquet nisl, vitae aliquet nisl nisl sit amet nisl.
			</TableCell>
		</TableRow>
	</TableBody>
</Table>
