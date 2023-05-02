<script lang="ts">
	import { Button, El, FormInput } from 'yesvelte'

	let takenEmails = ['test@gmail.com', 'user1@gmail.com', 'user2@gmail.com']
	let value: string
	let state: 'invalid' | undefined = undefined
	let hint = ''

	async function checkApiForEmailAvailability(email: string) {
		return new Promise((resolve) => setTimeout(() => resolve(!takenEmails.includes(email)), 200))
	}

	async function onBlur() {
		if (await checkApiForEmailAvailability(value)) {
			hint = ''
			state = undefined
		} else {
			hint = 'Email is not available!'
			state = 'invalid'
		}
	}
</script>

<El>These Emails are not available:</El>
{#each takenEmails as email}
	<El tag="small">{email}</El><br />
{/each}

<FormInput label="Enter your Email:" {hint} {state} bind:value on:blur={onBlur} />

<br />
<Button disabled={state === 'invalid'} color="primary">Submit</Button>
