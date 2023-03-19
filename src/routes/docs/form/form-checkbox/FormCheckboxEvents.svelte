<script>
	import { El, FormCheckbox } from 'yesvelte'

	let lastEvent = 'no event'
</script>

<FormCheckbox
	label="Test Events"
	on:blur={() => (lastEvent = 'blurred')}
	on:focus={() => (lastEvent = 'focused')}
	on:change={() => (lastEvent = 'changed')} />

<El>
	last Event: {lastEvent}
</El>
