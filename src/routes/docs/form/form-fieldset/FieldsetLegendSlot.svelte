<script>
	import {
		Fieldset,
		FormInput,
		FormTextarea,
		CardFooter,
		Card,
		CardBody,
		El,
		CardActions,
		Button,
	} from 'yesvelte'
</script>

<Card>
	<CardBody>
		<Fieldset legend="Personal Information" row>
			<FormInput required col="6" label="Name" placeholder="Enter your name" />
			<FormInput required type="email" col="6" label="Email" placeholder="Enter your email" />

			<FormTextarea col="12" label="Address" placeholder="Enter your address" />
		</Fieldset>

		<Fieldset legend="Account Information" row>
			<FormInput required col="6" label="Username" placeholder="Enter your name" />
			<El col="6" />
			<FormInput
				required
				type="password"
				col="6"
				label="Password"
				placeholder="Enter password..." />
			<FormInput
				required
				type="password"
				col="6"
				label="Repeat password"
				placeholder="Repeat password..." />
		</Fieldset>
	</CardBody>
	<CardFooter>
		<CardActions>
			<El d="flex" gap="2">
				<Button>Cancel</Button>
				<Button color="primary">Submit</Button>
			</El>
		</CardActions>
	</CardFooter>
</Card>
