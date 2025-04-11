<script lang="ts">
	import { Button, El, FormTextarea, Icon } from 'yesvelte'
</script>

<FormTextarea label="Start Icon">
	{#snippet startIconSnippet()}
		<Icon name="star" />
	{/snippet}
</FormTextarea>
<El p="3" />
<FormTextarea label="End Icon">
	{#snippet endIconSnippet()}
		<Icon name="star" />
	{/snippet}
</FormTextarea>
<El p="3" />
<FormTextarea label="Start Button">
	{#snippet startSnippet()}
		<Button color="primary">Start</Button>
	{/snippet}
</FormTextarea>
<El p="3" />
<FormTextarea label="End Button">
	{#snippet endSnippet()}
		<Button color="primary">Search</Button>
	{/snippet}
</FormTextarea>
<El p="3" />
