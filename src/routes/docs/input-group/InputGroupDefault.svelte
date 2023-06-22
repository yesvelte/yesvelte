<script lang="ts">
	import { FormInput } from 'yesvelte'
</script>

<FormInput placeholder="Username">
	<span slot="start-icon">@</span>
</FormInput>

<FormInput placeholder="Recipient's username">
	<span slot="end-icon">@example.com</span>
</FormInput>

<FormInput placeholder="Your vanity URL">
	<span slot="start-icon">https://example.com/users/</span>
</FormInput>

<FormInput placeholder="Amount">
	<span slot="start-icon">$</span>
	<span slot="end-icon">.00</span>
</FormInput>
