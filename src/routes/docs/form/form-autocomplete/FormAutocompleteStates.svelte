<script>
	import { FormAutocomplete } from 'yesvelte'
</script>

<FormAutocomplete label="Label" placeholder="state is not set for this" />
<FormAutocomplete label="Label" placeholder="this is valid state" state="valid" />
<FormAutocomplete label="Label" placeholder="this is invalid state" state="invalid" />
