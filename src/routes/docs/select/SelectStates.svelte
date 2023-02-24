<script>
	import { Select } from 'yesvelte'
</script>

<Select placeholder="state is not set for this" />
<Select placeholder="this is valid state" state="valid" />
<Select placeholder="this is invalid state" state="invalid" />
