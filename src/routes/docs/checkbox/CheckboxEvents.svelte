<script>
	import { Checkbox } from 'yesvelte'

	let lastEvent = 'no event'
</script>

{lastEvent}
<Checkbox
	label="Test"
	onblur={() => (lastEvent = 'blurred')}
	onfocus={() => (lastEvent = 'focused')}
	onchange={() => (lastEvent = 'changed')} />
