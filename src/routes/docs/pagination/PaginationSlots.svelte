<script>
	import { El, Icon, Pagination } from 'yesvelte'

	let value = 2
</script>

<Pagination bind:value from={1} to={10} hasFirst hasLast hasNext hasPrev>
	<El slot="page" let:page>
		{page}
	</El>

	<El slot="prev">
		<Icon name="chevron-left" />
		Prev
	</El>
	<El slot="next">
		Next
		<Icon name="chevron-right" />
	</El>
	<El slot="first">
		First
		<Icon name="chevrons-left" />
	</El>
	<El slot="last">
		Last
		<Icon name="chevrons-right" />
	</El>
</Pagination>

<El>
	page: {value}
</El>
