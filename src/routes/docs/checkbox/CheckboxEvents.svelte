<script>
	import { Checkbox } from 'yesvelte'

	let lastEvent = 'no event'
</script>

{lastEvent}
<Checkbox
	label="Test"
	on:blur={() => (lastEvent = 'blurred')}
	on:focus={() => (lastEvent = 'focused')}
	on:change={() => (lastEvent = 'changed')} />
