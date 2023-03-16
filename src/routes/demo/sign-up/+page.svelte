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
				<El tag="h2" textAlign="center" mb="4">Create new account</El>
				<FormInput label="Name" placeholder="Enter name" />
				<FormInput label="Email address" placeholder="Enter email" />

				<Label d="flex" justifyContent="between">Password</Label>
				<Input type={textType} placeholder="Your password">
					<Button tag="a" slot="end" on:click={onClick}><Icon name={icon} /></Button>
				</Input>
				<El mb="3" />
				<Checkbox>Agree the <a href=".">terms and policy</a>.</Checkbox>

				<Button color="primary" col="12" mt="4">Create new account</Button>
			</CardBody>
		</Card>
		<El textAlign="center" mt="3">
			Already have an account? <a href="./sign-in" tabindex="-1">Sign in</a></El>
	</El>
</El>
