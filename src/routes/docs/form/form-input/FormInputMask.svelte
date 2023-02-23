<script lang="ts">
	import { FormInput } from 'yesvelte'

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

<FormInput label="Credit Card" mask="9999 9999 9999 9999" {maskOptions} />
<FormInput label="Phone Number" mask="(999)-999-9999" {maskOptions} />
<FormInput label="Postal Code" mask="A9A-9A9" {maskOptions} />
<FormInput label="Date Time" mask="datetime" maskOptions={dateOptions} />
