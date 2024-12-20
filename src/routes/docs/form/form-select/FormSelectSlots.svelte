<script lang="ts">
	import { Button, El, FormSelect, Icon } from 'yesvelte'

	let items = $state(['Apple', 'Banana', 'Cherry'])
</script>

<FormSelect {items} label="Start Icon">
	{#snippet startIconSnippet()}
		<Icon name="star" />
	{/snippet}
</FormSelect>
<El p="3" />
<FormSelect {items} label="End Icon">
	{#snippet endIconSnippet()}
		<Icon name="star" />
	{/snippet}
</FormSelect>
<El p="3" />
<FormSelect {items} label="Start Button">
	{#snippet startSnippet()}
		<Button color="primary">Start</Button>
	{/snippet}
</FormSelect>
<El p="3" />
<FormSelect {items} label="End Button">
	{#snippet endSnippet()}
		<Button color="primary">Search</Button>
	{/snippet}
</FormSelect>
<El p="3" />
