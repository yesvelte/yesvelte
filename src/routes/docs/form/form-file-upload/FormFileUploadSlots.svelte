<script lang="ts">
	import { Button, El, FormFileUpload, Icon } from 'yesvelte'
</script>

<FormFileUpload label="Start Icon">
	{#snippet startIconSnippet()}
		<Icon name="star" />
	{/snippet}
</FormFileUpload>
<El p="3" />
<FormFileUpload label="End Icon">
	{#snippet endIconSnippet()}
		<Icon name="star" />
	{/snippet}
</FormFileUpload>
<El p="3" />
<FormFileUpload label="Start Button">
	{#snippet startSnippet()}
		<Button color="primary">Start</Button>
	{/snippet}
</FormFileUpload>
<El p="3" />
<FormFileUpload label="End Button">
	{#snippet endSnippet()}
		<Button color="primary">Search</Button>
	{/snippet}
</FormFileUpload>
<El p="3" />
