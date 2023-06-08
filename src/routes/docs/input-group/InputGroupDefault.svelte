<script lang="ts">
	import { FormInput } from 'yesvelte'
</script>

<FormInput placeholder="Username">
	<span slot="start">@</span>
</FormInput>

<FormInput placeholder="Recipient's username">
	<span slot="end">@example.com</span>
</FormInput>

<FormInput placeholder="Your vanity URL">
	<span slot="start">https://example.com/users/</span>
</FormInput>

<FormInput placeholder="Amount">
	<span slot="start">$</span>
	<span slot="end">.00</span>
</FormInput>
