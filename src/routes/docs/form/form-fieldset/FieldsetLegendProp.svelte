<script>
	import { Fieldset, FormInput, FormDatePicker, FormTextarea, FormSwitch } from 'yesvelte'
</script>

<Fieldset legend="Personal Information" row>
	<FormInput required col="6" label="Name" placeholder="Enter your name" />
	<FormInput required type="email" col="6" label="Email" placeholder="Enter your email" />
	<FormDatePicker col="6" label="Date of Birth" />
	<FormSwitch col="6" label="Terms" description="I agree to the terms and conditions">
		Terms
	</FormSwitch>
	<FormTextarea col="12" label="Address" placeholder="Enter your address" />
</Fieldset>
