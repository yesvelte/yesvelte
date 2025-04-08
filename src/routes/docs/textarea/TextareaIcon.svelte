<script>
	import { El, Icon, Textarea } from 'yesvelte'
</script>

<Textarea>
	{#snippet startSnippet()}
		<Icon name="align-center" />
	{/snippet}
</Textarea>

<El p="3" />

<Textarea>
	{#snippet endSnippet()}
		<Icon name="align-center" />
	{/snippet}
</Textarea>
