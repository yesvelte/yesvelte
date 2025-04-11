<script lang="ts">
	import { Button, El, FormInput, Icon, Tooltip, type InputStates } from 'yesvelte'

	let hint: string = $state('')
	let state: InputStates | undefined = $state(undefined)

	function validate() {
		state = 'invalid'
		hint = 'Email address is not valid'
	}
</script>

<El row>
	<FormInput {state} {hint} label="Email" placeholder="Enter your email...">
		{#snippet startIconSnippet()}
			<Icon name="mail" />
		{/snippet}
		<Button slot="end" onclick={validate}>
			<Icon name="check" />
			<Tooltip>Check if email is valid</Tooltip>
		</Button>
	</FormInput>
	<FormInput col="6" label="Password" required placeholder="Enter your password...">
		{#snippet startIconSnippet()}
			<Icon name="key" />
		{/snippet}
	</FormInput>
	<FormInput
		state="invalid"
		hint="Should be same as password"
		col="6"
		label="Repeat Password"
		required
		placeholder="Repeat password...">
		{#snippet startIconSnippet()}
			<Icon name="key" />
		{/snippet}
	</FormInput>
</El>
