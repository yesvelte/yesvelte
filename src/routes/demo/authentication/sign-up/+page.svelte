<script lang="ts">
	import {
		El,
		FormInput,
		Button,
		Card,
		Icon,
		CardBody,
		Label,
		Input,
		CardActions,
		FormField,
		FormCheckbox,
	} from 'yesvelte'

	let icon = 'eye'
	let textType = 'password'

	const onClick = () => {
		icon = icon === 'eye' ? 'eye-off' : 'eye'
		textType = textType === 'password' ? 'text' : 'password'
	}
</script>

<El
	mt="5"
	col="12"
	colSm="8"
	offsetSm="2"
	colLg="6"
	offsetLg="3"
	colXl="4"
	offsetXl="4"
	style="height:85vh;">
	<El container class="container-tight">
		<Card size="md">
			<CardBody>
				<El tag="h2" textAlign="center" mb="4">Create new account</El>
				<FormInput label="Name" placeholder="Enter name" />
				<FormInput label="Email address" placeholder="Enter email" type="email" />
				<FormField>
					<El d="flex" justifyContent="between">
						<Label>Password</Label>
						<El>
							<a href="./forgot-password">I forgot password</a>
						</El>
					</El>
					<Input type={textType} placeholder="Your password">
						<Button slot="end" on:click={onClick}><Icon name={icon} /></Button>
					</Input>
				</FormField>

				<FormCheckbox>Agree the <a href=".">terms and policy</a>.</FormCheckbox>

				<Button color="primary" col="12" mt="4">Create new account</Button>
			</CardBody>
		</Card>
		<El textAlign="center" mt="3">
			Already have an account? <a href="./sign-in" tabindex="-1">Sign in</a>
		</El>
	</El>
</El>
