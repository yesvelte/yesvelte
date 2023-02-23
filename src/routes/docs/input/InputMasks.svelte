<script lang="ts">
	import { Input } from 'yesvelte'

	const dateOptions = {
		inputFormat: 'dd/mm/yyyy',
		showMaskOnHover: false,
		clearMaskOnLostFocus: false,
		oncomplete: function (e: any) {
			console.log(e.target.value)
		},
	}

	const maskOptions = {
		clearMaskOnLostFocus: false,
		showMaskOnHover: false,
	}
</script>

<div class="mb-2">Credit Card</div>
<Input mask="9999 9999 9999 9999" {maskOptions} />
<div class="mb-2">Phone Number</div>
<Input mask="(999)-999-9999" {maskOptions} />
<div class="mb-2">Postal Code</div>
<Input mask="A9A-9A9" {maskOptions} />
<div class="mb-2">Date Time</div>
<Input mask="datetime" maskOptions={dateOptions} />
