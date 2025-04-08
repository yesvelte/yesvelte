<script lang="ts">
	import { Button, El, FormDatePicker, Icon } from 'yesvelte'
</script>

<FormDatePicker label="Start Icon">
	{#snippet startIconSnippet()}
		<Icon name="star" />
	{/snippet}
</FormDatePicker>
<El p="3" />
<FormDatePicker label="End Icon">
	{#snippet endIconSnippet()}
		<Icon name="star" />
	{/snippet}
</FormDatePicker>
<El p="3" />
<FormDatePicker label="Start Button">
	{#snippet startSnippet()}
		<Button color="primary">Start</Button>
	{/snippet}
</FormDatePicker>
<El p="3" />
<FormDatePicker label="End Button">
	{#snippet endSnippet()}
		<Button color="primary">Search</Button>
	{/snippet}
</FormDatePicker>
<El p="3" />
