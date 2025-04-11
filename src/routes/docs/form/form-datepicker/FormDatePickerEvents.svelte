<script lang="ts">
	import { FormDatePicker } from 'yesvelte'

	let value: Date | undefined = $state()
	let changed: Date | undefined = $state()
	let clicked: number = $state(0)

	function onChange(detail) {
		changed = detail
	}

	function onClick() {
		clicked += 1
	}
</script>

<FormDatePicker label="Datepicker" onclick={onClick} bind:value onchanged={onChange} />
<i>value: {value}, changed: {changed}, clicked: {clicked}</i>
