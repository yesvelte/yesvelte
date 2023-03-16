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

<El row g="0" m="0" style="background-color:white;">
	<El col="12" colLg="6" colXl="4" justifyContent="center" alignItems="center" d="flex">
		<El container class="container-tight px-lg-5" my="5">
			<El textAlign="center" mb="4">
				<img src="/images/svelte.svg" height="36" alt="" />
				<El tag="span" class="h1" ms="2">YeSvelte</El>
			</El>
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

			<El textAlign="center" mt="3"
				>Don't have account yet? <a href="./sign-up.html" tabindex="-1">Sign up</a></El>
		</El>
	</El>
	<El col="12" colLg="6" colXl="8" d="none" dLg="block" justifyContent="center" m="0" p="0">
		<El class="bg-cover min-vh-100" style="background-image: url(/images/sign-in-cover.jpg);" />
	</El>
</El>
