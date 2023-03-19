<script>
	import { El, Pagination } from 'yesvelte'

	let value = 2
</script>

<Pagination bind:value from={1} to={10} hasFirst hasLast hasNext hasPrev />

<El>
	page: {value}
</El>
