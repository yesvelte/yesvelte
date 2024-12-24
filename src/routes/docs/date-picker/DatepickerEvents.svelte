<script lang="ts">
	import { DatePicker } from 'yesvelte'

	let value: Date | undefined = $state(undefined)
	let changed: Date | undefined = $state(undefined)
	let clicked: number = $state(0)

	function onchanged(event) {
		changed = event
	}

	function onclick() {
		clicked += 1
	}
</script>

<DatePicker bind:value {onclick} {onchanged} />
<i>value: {value}, changed: {changed}, clicked: {clicked}</i>
