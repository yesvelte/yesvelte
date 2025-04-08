<script>
	import { El, FormCheckbox } from 'yesvelte'

	let lastEvent = 'no event'
</script>

<FormCheckbox
	label="Test Events"
	onblur={() => (lastEvent = 'blurred')}
	onfocus={() => (lastEvent = 'focused')}
	onchange={() => (lastEvent = 'changed')} />

<El>
	last Event: {lastEvent}
</El>
