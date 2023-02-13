<script>
	import { El } from '$lib'
</script>

<El container>
	<El row alignItems="start">
		<El col="9">col="9"</El>
		<El col="4">
			col="4"<br />Since 9 + 4 = 13 &gt; 12, this 4-column-wide element gets wrapped onto a new line
			as one contiguous unit.
		</El>
		<El col="6">col="6"<br />SSubsequent columns continue along the new line.</El>
	</El>
</El>
