<script lang="ts">
	import { Button, FormInput, Input } from 'yesvelte'
</script>

<FormInput>
	{#snippet startSnippet()}
		<Button>Button</Button>
	{/snippet}
</FormInput>

<FormInput>
	{#snippet startSnippet()}
		<Button outline color="secondary">Button</Button>
	{/snippet}
</FormInput>

<FormInput placeholder="Recipient's username">
	{#snippet endSnippet()}
		<Button>Button</Button>
	{/snippet}
</FormInput>

<FormInput placeholder="Recipient's username">
	{#snippet endSnippet()}
		<Button outline color="secondary">Button</Button>
	{/snippet}
</FormInput>

<FormInput>
	{#snippet startSnippet()}
		<Button outline color="secondary">Button</Button>
		<Button outline color="secondary">Button</Button>
	{/snippet}
</FormInput>

<FormInput>
	{#snippet endSnippet()}
		<Button>Button</Button>
		<Button>Button</Button>
	{/snippet}
</FormInput>
