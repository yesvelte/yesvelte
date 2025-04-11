<script lang="ts">
	import { Button, El, Input } from 'yesvelte'

	let takenEmails = $state(['test@gmail.com', 'user1@gmail.com', 'user2@gmail.com'])
	let value: string | undefined = $state(undefined)
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

<El tag="strong" mt="3">Enter your email:</El>
<Input state={validationState} bind:value onblur={onBlur} />
<El mb="3" tag="small">{hint}</El>
<br />
<Button color="primary">Submit</Button>
