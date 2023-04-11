<script>
	import { Icon, Pagination, PaginationItem } from 'yesvelte'
</script>

<Pagination>
	<PaginationItem href="?page=prev" disabled>
		<Icon name="chevron-left" />
		Prev
	</PaginationItem>
	<PaginationItem href="?page=1" active>1</PaginationItem>
	<PaginationItem href="?page=2">2</PaginationItem>
	<PaginationItem href="?page=3">3</PaginationItem>
	<PaginationItem href="?page=4">4</PaginationItem>
	<PaginationItem href="?page=next">
		Next
		<Icon name="chevron-right" />
	</PaginationItem>
</Pagination>
