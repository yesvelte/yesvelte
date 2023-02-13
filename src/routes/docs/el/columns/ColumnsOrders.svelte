<script>
	import { El } from '$lib'
</script>

<El container>
	<El row>
		<El col>First in DOM, no order applied</El>
		<El col order="5">Second in DOM, with a larger order</El>
		<El col order="1">Third in DOM, with an order of 1</El>
	</El>
</El>

<El container>
	<El row>
		<El col order="last">First in DOM, ordered last</El>
		<El col>Second in DOM, unordered</El>
		<El col order="first">Third in DOM, ordered first</El>
	</El>
</El>
