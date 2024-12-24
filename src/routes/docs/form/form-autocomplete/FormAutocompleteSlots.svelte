<script lang="ts">
	import { Button, El, FormAutocomplete, Icon } from 'yesvelte'

	let items = ['A', 'B', 'C', 'D', 'E']
</script>

<FormAutocomplete {items} label="Start Icon">
	{#snippet startIconSnippet()}
		<Icon name="star" />
	{/snippet}
</FormAutocomplete>
<El p="3" />
<FormAutocomplete {items} label="End Icon">
	{#snippet endIconSnippet()}
		<Icon name="star" />
	{/snippet}
</FormAutocomplete>
<El p="3" />
<FormAutocomplete {items} label="Start Button">
	{#snippet startSnippet()}
		<Button color="primary">Start</Button>
	{/snippet}
</FormAutocomplete>
<El p="3" />
<FormAutocomplete {items} label="End Button">
	{#snippet endSnippet()}
		<Button color="primary">Search</Button>
	{/snippet}
</FormAutocomplete>
<El p="3" />
