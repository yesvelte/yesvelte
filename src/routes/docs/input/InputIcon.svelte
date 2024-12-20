<script lang="ts">
	import { El, Icon, Input } from 'yesvelte'
</script>

<Input placeholder="start icon">
	{#snippet startSnippet()}
		<Icon name="user" />
	{/snippet}
</Input>
<El p="3" />
<Input placeholder="end icon">
	{#snippet endSnippet()}
		<Icon name="user" />
	{/snippet}
</Input>
