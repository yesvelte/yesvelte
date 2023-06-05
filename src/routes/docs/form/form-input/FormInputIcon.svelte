<script lang="ts">
	import { Button, El, FormInput, Icon, Tooltip, type InputStates } from 'yesvelte'

	let hint: string = ''
	let state: InputStates | undefined = undefined

	function validate() {
		state = 'invalid'
		hint = 'Email address is not valid'
	}
</script>

<El row>
	<FormInput {state} {hint} label="Email" placeholder="Enter your email...">
		<span slot="start">
			<Icon name="mail" />
		</span>
		<Button slot="end" on:click={validate}>
			<Icon name="check" />
			<Tooltip>Check if email is valid</Tooltip>
		</Button>
	</FormInput>
	<FormInput col="6" label="Password" required placeholder="Enter your password...">
		<span slot="start">
			<Icon name="key" />
		</span>
	</FormInput>
	<FormInput
		state="invalid"
		hint="Should be same as password"
		col="6"
		label="Repeat Password"
		required
		placeholder="Repeat password...">
		<span slot="start">
			<Icon name="key" />
		</span>
	</FormInput>
</El>
