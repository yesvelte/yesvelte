<script>
	import { FormInput } from 'yesvelte'
</script>

<FormInput
	label="Email"
	hint="We'll never share your email with anyone else."
	innerProps={{placeholder: "Enter your email..."}} />
<FormInput label="Email" state="valid" hint="Your email is validated!" value="info@example.com" />
<FormInput label="Email" state="invalid" hint="Invalid email address!" />
