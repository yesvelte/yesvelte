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
		Checkbox,
	} from 'yesvelte'

	let icon = 'eye'
	let textType = 'password'

	const onClick = () => {
		icon = icon === 'eye' ? 'eye-off' : 'eye'
		textType = textType === 'password' ? 'text' : 'password'
	}
</script>

<El class="page page-center" style="height:100vh;">
	<El container class="container-tight">
		<El textAlign="center" mb="4">
			<img src="/images/svelte.svg" height="36" alt="" />
			<El tag="span" class="h1" ms="2">YeSvelte</El>
		</El>
		<Card size="md">
			<CardBody>
				<El tag="h2" textAlign="center" mb="4">Login to your account</El>
				<FormInput label="Email address" placeholder="your@email.com" />

				<Label d="flex" justifyContent="between">
					<El textAlign="start">Password</El>
					<El textAlign="end">
						<a href="./forgot-password.html">I forgot password</a>
					</El>
				</Label>
				<Input type={textType} placeholder="Your password">
					<Button tag="a" slot="end" on:click={onClick}><Icon name={icon} /></Button>
				</Input>
				<El mb="2" />
				<Checkbox label="Remember me on this device" />

				<Button color="primary" col="12" mt="4">Sign in</Button>

				<Divider>OR</Divider>

				<El row>
					<El col="6">
						<Button col="12">
							<Icon name="brand-github" />
							Login with Github</Button>
					</El>
					<El col="6"
						><Button col="12">
							<Icon name="brand-twitter" color="twitter" />
							Login with Twitter
						</Button>
					</El>
				</El>
			</CardBody>
		</Card>
		<El textAlign="center" mt="3"
			>Don't have account yet? <a href="./sign-up" tabindex="-1">Sign up</a></El>
	</El>
</El>
