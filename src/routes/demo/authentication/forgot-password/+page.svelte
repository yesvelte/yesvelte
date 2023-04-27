<script lang="ts">
	import { El, FormInput, Button, Card, CardBody, Icon } from 'yesvelte'
</script>

<El class="page page-center" style="height:85vh;">
	<El container class="container-tight">
		<Card size="md">
			<CardBody>
				<El tag="h2" textAlign="center" mb="4">Forgot password</El>
				<El mb="4">Enter your email address and your password will be reset and emailed to you.</El>
				<FormInput label="Email address" placeholder="Enter email" />

				<Button color="primary" col="12" mt="3"><Icon name="mail" /> Send me new password</Button>
			</CardBody>
		</Card>
		<El textAlign="center" mt="3">
			Forget it, <a href="./sign-in" tabindex="-1">send me back</a> to the sign in screen.
		</El>
	</El>
</El>
