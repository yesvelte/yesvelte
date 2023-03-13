<script>
    import {Icon, Pagination, PaginationItem} from 'yesvelte'
</script>

<Pagination>
	<PaginationItem disabled>
        <Icon name="chevron-left"/>
        Prev
    </PaginationItem>
    <PaginationItem active>1</PaginationItem>
    <PaginationItem>2</PaginationItem>
    <PaginationItem>3</PaginationItem>
    <PaginationItem>4</PaginationItem>
    <PaginationItem>
        Next
        <Icon name="chevron-right"/>
    </PaginationItem>
</Pagination>
