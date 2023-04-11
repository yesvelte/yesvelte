<script lang="ts">
	import { El, FormInput, Button, Icon, Label, Input, FormField, FormCheckbox } from 'yesvelte'

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

			<El textAlign="center" mt="3">
				Don't have account yet? <a href="./sign-up.html" tabindex="-1">Sign up</a>
			</El>
		</El>
	</El>
	<El col="12" colLg="6" colXl="8" d="none" dLg="block" justifyContent="center" m="0" p="0">
		<El class="bg-cover min-vh-100" style="background-image: url(/images/sign-in-cover.jpg);" />
	</El>
</El>
