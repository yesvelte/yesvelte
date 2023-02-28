<script>
	import { Autocomplete } from 'yesvelte'
</script>

<Autocomplete placeholder="state is not set for this" />
<Autocomplete placeholder="this is valid state" state="valid" />
<Autocomplete placeholder="this is invalid state" state="invalid" />
