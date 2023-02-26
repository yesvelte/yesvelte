<script>
	import { FormTextarea } from 'yesvelte'
</script>

<FormTextarea
	label="Email"
	hint="We'll never share your email with anyone else."
	placeholder="Enter your email..." />
<FormTextarea
	label="Email"
	state="valid"
	hint="Your email is validated!"
	value="info@example.com" />
<FormTextarea label="Email" state="invalid" hint="Invalid email address!" />
