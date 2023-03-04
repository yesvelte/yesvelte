<script>
	import { FormTextarea } from 'yesvelte'
</script>

<FormTextarea label="Email" innerProps={{ placeholder: 'Enter your email...' }} />
<FormTextarea label="Email" state="valid" value="info@example.com" />
<FormTextarea label="Email" state="invalid" />
