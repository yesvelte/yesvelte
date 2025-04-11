<script lang="ts">
	import { FormInput } from 'yesvelte'
</script>

<FormInput placeholder="Username">
	{#snippet startIconSnippet()}
		<span>@</span>
	{/snippet}
</FormInput>

<FormInput placeholder="Recipient's username">
	{#snippet endIconSnippet()}
		<span>@example.com</span>
	{/snippet}
</FormInput>

<FormInput placeholder="Your vanity URL">
	{#snippet startIconSnippet()}
		<span>https://example.com/users/</span>
	{/snippet}
</FormInput>

<FormInput placeholder="Amount">
	{#snippet startIconSnippet()}
		<span>$</span>
	{/snippet}
	{#snippet endIconSnippet()}
		<span>.00</span>
	{/snippet}
</FormInput>
