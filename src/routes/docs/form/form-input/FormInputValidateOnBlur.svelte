<script lang="ts">
	import { Button, El, FormInput } from 'yesvelte'

	let takenEmails = ['test@gmail.com', 'user1@gmail.com', 'user2@gmail.com']
	let value: string = $state()
	let validationState: 'invalid' | undefined = $state(undefined)
	let hint = $state('')

	async function checkApiForEmailAvailability(email: string) {
		return new Promise((resolve) => setTimeout(() => resolve(!takenEmails.includes(email)), 200))
	}

	async function onBlur() {
		if (await checkApiForEmailAvailability(value)) {
			hint = ''
			validationState = undefined
		} else {
			hint = 'Email is not available!'
			validationState = 'invalid'
		}
	}
</script>

<El>These Emails are not available:</El>
{#each takenEmails as email}
	<El tag="small">{email}</El><br />
{/each}

<FormInput label="Enter your Email:" {hint} state={validationState} bind:value onblur={onBlur} />

<br />

<Button disabled={validationState === 'invalid'} color="primary">Submit</Button>
