<script lang="ts">
	import { FormDatePicker } from 'yesvelte'

	let value: Date
	let changed: Date
	let clicked: number = 0

	function onChange({ detail }: CustomEvent) {
		changed = detail
	}

	function onClick() {
		clicked += 1
	}
</script>

<FormDatePicker label="Datepicker" on:click={onClick} bind:value on:changed={onChange} />
<i>value: {value}, changed: {changed}, clicked: {clicked}</i>
