<script lang="ts">
	import {
		El,
		FormInput,
		Button,
		Card,
		Divider,
		Icon,
		CardBody,
		Label,
		Input,
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

<El class="page page-center" style="height:85vh;">
	<El container class="container-tight">
		<Card size="md">
			<CardBody>
				<El tag="h2" textAlign="center" mb="4">Login to your account</El>
				<FormInput label="Email address" placeholder="your@email.com" type="email" />
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
				<FormCheckbox>Remember me on this device</FormCheckbox>

				<Button color="primary" col="12" mt="3">Sign in</Button>
			</CardBody>
			<Divider>OR</Divider>
			<CardBody>
				<El row>
					<El col="6">
						<Button col="12">
							<Icon name="brand-github" />
							Github Login</Button>
					</El>
					<El col="6">
						<Button col="12">
							<Icon name="brand-twitter" color="twitter" />
							Twitter Login
						</Button>
					</El>
				</El>
			</CardBody>
		</Card>
		<El textAlign="center" mt="3">
			Don't have account yet? <a href="./sign-up" tabindex="-1">Sign up</a>
		</El>
	</El>
</El>
