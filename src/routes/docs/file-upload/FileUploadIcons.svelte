<script lang="ts">
	import { El, FileUpload, Icon } from 'yesvelte'
</script>

<FileUpload>
	{#snippet startSnippet()}
		<Icon name="file-text" />
	{/snippet}
</FileUpload>

<El p="3" />

<FileUpload>
	{#snippet endSnippet()}
		<Icon name="file-text" />
	{/snippet}
</FileUpload>
