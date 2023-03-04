<script>
	import { FormInput } from 'yesvelte'
</script>

<FormInput label="Email" innerProps={{placeholder: "Enter your email..."}} />
<FormInput label="Email" state="valid" value="info@example.com" />
<FormInput label="Email" state="invalid" />
