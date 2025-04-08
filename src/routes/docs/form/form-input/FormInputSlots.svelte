<script lang="ts">
	import { Button, El, FormInput, Icon } from 'yesvelte'
</script>

<FormInput label="Start Icon">
	{#snippet startIconSnippet()}
		<Icon name="star" />
	{/snippet}
</FormInput>
<El p="3" />
<FormInput label="End Icon">
	{#snippet endIconSnippet()}
		<Icon name="star" />
	{/snippet}
</FormInput>
<El p="3" />
<FormInput label="Start Button">
	{#snippet startSnippet()}
		<Button color="primary">Start</Button>
	{/snippet}
</FormInput>
<El p="3" />
<FormInput label="End Button">
	{#snippet endSnippet()}
		<Button color="primary">Search</Button>
	{/snippet}
</FormInput>
<El p="3" />
