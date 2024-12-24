<script>
	import { El, Icon, Pagination } from 'yesvelte'

	let value = 2
</script>

<Pagination bind:value from={1} to={10} hasFirst hasLast hasNext hasPrev>
	{#snippet pageSnippet({ page })}
		<El>
			{page}
		</El>
	{/snippet}
	{#snippet prevSnippet()}
		<El>
			<Icon name="chevron-left" />
			Prev
		</El>
	{/snippet}
	{#snippet nextSnippet()}
		<El>
			Next
			<Icon name="chevron-right" />
		</El>
	{/snippet}
	{#snippet firstSnippet()}
		<El>
			First
			<Icon name="chevrons-left" />
		</El>
	{/snippet}
	{#snippet lastSnippet()}
		<El>
			Last
			<Icon name="chevrons-right" />
		</El>
	{/snippet}
</Pagination>

<El>
	page: {value}
</El>
