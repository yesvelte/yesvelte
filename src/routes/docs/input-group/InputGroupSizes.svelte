<script lang="ts">
	import { Icon, Input } from 'yesvelte'
</script>

<Input size="sm" placeholder="Small">
	{#snippet startSnippet()}
		<Icon name="star" />
	{/snippet}
</Input>

<Input placeholder="Medium">
	{#snippet startSnippet()}
		<Icon name="star" />
	{/snippet}
</Input>

<Input size="lg" placeholder="Large">
	{#snippet startSnippet()}
		<Icon name="star" />
	{/snippet}
</Input>
