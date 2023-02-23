<script lang="ts">
	import { Input } from 'yesvelte'
</script>

<Input placeholder="Username">
	<span slot="start">@</span>
</Input>

<Input placeholder="Recipient's username">
	<span slot="end">@example.com</span>
</Input>

<Input placeholder="Your vanity URL">
	<span slot="start">https://example.com/users/</span>
</Input>

<Input placeholder="Amount">
	<span slot="start">$</span>
	<span slot="end">.00</span>
</Input>
