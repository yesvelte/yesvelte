<script>
	import {
		Button,
		Card,
		CardActions,
		CardBody,
		CardFooter,
		Divider,
		FormInput,
	} from 'yesvelte'

	let theme = 'light'
</script>

<Button on:click={() => (theme = theme === 'dark' ? 'light' : 'dark')}>
	{theme === 'dark' ? 'Light' : 'Dark'} Mode
</Button>

<Card mt="2" {theme} title="Survey Form">
	<CardBody row>
		Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error iusto quisquam accusantium nulla
		veritatis repellendus eum ad explicabo nemo in ex dicta pariatur aliquid, rerum, temporibus eos nostrum
		aliquam aut.
		<Divider>Personal Information</Divider>
		<FormInput label="Name" col="6" />
		<FormInput label="Last name" col="6" />
		<FormInput label="Username" col="6" />
		<FormInput label="Email" col="6" />
	</CardBody>
	<CardFooter>
		<CardActions>
			<Button>Reset</Button>
			<Button color="primary">Next</Button>
		</CardActions>
	</CardFooter>
</Card>
